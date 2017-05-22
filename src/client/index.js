import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store/configureStore'
import { getBooks } from './actions/bookActions'
import { getTradeRequests } from './actions/tradeRequestActions'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

store.dispatch(getBooks())
store.dispatch(getTradeRequests())

render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))