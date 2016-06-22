// @flow
import React from 'react'
import {
  Router,
  Route,
  Redirect
} from 'react-router'
import history from './history'
import LoginContainer from './containers/LoginContainer'
import HomeContainer from './containers/HomeContainer'
import App from './App'

export default function createRouter(app: App) {
  const createElement = (Component, reactRouterProps) => <Component {...reactRouterProps} app={app} />

  return (
    <Router history={history} createElement={createElement}>
      <Route path="login" component={LoginContainer} />
      <Route path="home" component={HomeContainer} />
      <Redirect from="/" to="login" />
    </Router>
  )
}