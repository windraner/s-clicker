import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import cookies from 'js-cookie'

import LoginPage from 'containers/LoginPage'
import LogoutPage from 'containers/LogoutPage'
import HomePage from 'containers/HomePage'
import Template from 'components/template/Template'
import Loader from 'common/loader/Loader'

export const browserHistory = createBrowserHistory()

const checkIsAuth = (component) => {
  const token = cookies.get('token')
  if(!token) return (<Redirect to="/login" />)
  return (
    <Template>
      {component}
      <Loader />
    </Template>
  )
}

const checkIsNotAuth = (component) => {
  const token = cookies.get('token')
  if(token) return (<Redirect to="/" />)
  return (
    <Template>
      {component}
      <Loader />
    </Template>
  )
}

export default function App ({ store }) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Switch>
          <Route
            path="/login"
            render={() => checkIsNotAuth(<LoginPage />)}
          />

          <Route
            path="/logout"
            render={() => checkIsAuth(<LogoutPage />)}
          />

          <Route
            path="/"
            render={() => checkIsAuth(<HomePage />)}
          />
        </Switch>
      </Router>
    </Provider>
  )
}
