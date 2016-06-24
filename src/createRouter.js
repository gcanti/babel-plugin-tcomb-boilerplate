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

  function createElement(Component, reactRouterProps) {
    return <Component {...reactRouterProps} app={app} />
  }

  function checkForLoggedInUser(nextState, replace) {
    if (app.isAuthenticated()) {
      replace({
        pathname: '/home'
      })
    }
  }

  function checkForLoggedOutUser(nextState, replace) {
    if (!app.isAuthenticated()) {
      replace({
        pathname: '/login',
        query: {
          nextPathname: nextState.location.pathname
        }
      })
    }
  }

  return (
    <Router history={history} createElement={createElement}>

      {/* anonymous routes, redirect to /home if the user is logged in */}
      <Route onEnter={checkForLoggedInUser}>
        <Route path="login" component={LoginContainer} />
      </Route>

      {/* logged in routes, redirect to /login if the user is logged out */}
      <Route onEnter={checkForLoggedOutUser}>
        <Route path="home" component={HomeContainer} />
      </Route>

      <Redirect from="/" to="login" />

    </Router>
  )
}