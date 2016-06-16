// @flow
import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import Route from './components/Route'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))