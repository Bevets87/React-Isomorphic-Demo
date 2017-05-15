import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './Main'
import Login from './Login'
import Register from './Register'
import MyBooks from './MyBooks'

class App extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/my-books' component={MyBooks} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
