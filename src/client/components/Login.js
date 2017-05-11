import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userLoginRequest, setUser, setErrors } from '../actions/userActions'

import validateLoginInput from '../../server/shared/validations/login'

import Navbar from './Navbar'

import './Login.scss'

class Login extends Component {
  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: '',
      clientErrors: {
        email: '',
        password: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= '768') {
        this.props.history.push('/')
      }
    })
  }
  handleInput (event) {
    event.preventDefault()
    switch (event.target.id) {
    case 'email':
      this.setState({
        email: event.target.value
      })
      break
    case 'pwd':
      this.setState({
        password: event.target.value
      })
      break
    }
  }
  isValid () {
    const { errors, isValid } = validateLoginInput(this.state)

    if (!isValid) {
      this.setState({
        clientErrors: errors
      })
    }

    return isValid
  }
  handleLogin (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {}
    })
    if (this.isValid()) {
      userLoginRequest(this.state)
      .then(
        response => {
          localStorage.setItem('token', response.data.token)
          this.props.dispatch(setUser(response.data.email, response.data.city, response.data.state, true))
          this.props.history.push('/dashboard')
        })
      .catch(
        error => {
          this.props.dispatch(setErrors(error.response.data.errors))
        })
    }
  }
  render () {
    const { clientErrors } = this.state

    return (
      <div>
        <Navbar />
        <main>
          <div className='container-fluid'>
          <div className='mobile-login-container'>
          <form>
            <div className='login-title'>
              <h1>Login:</h1>
              <button type='submit' className='btn btn-primary' onClick={this.handleLogin}>Login</button>
            </div>
            <div className='form-group'>
              <input placeholder='Email' type='email' className='form-control' id='email' onChange={this.handleInput} />
              {clientErrors.email && <span className='error'>{clientErrors.email}</span>}
            </div>
            <div className='form-group'>
              <input placeholder='Password' type='password' className='form-control' id='pwd' onChange={this.handleInput} />
              {clientErrors.password && <span className='error'>{clientErrors.password}</span>}
            </div>

          </form>
          </div>
          </div>
        </main>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object,
  serverErrors: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  const { serverErrors } = state.userReducer

  return {
    serverErrors
  }
}
export default connect(mapStateToProps)(Login)
