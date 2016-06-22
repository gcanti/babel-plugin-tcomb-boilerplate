// @flow
import React from 'react'
import { Router } from 'react-router'
import App from '../App'

type Props = {
  history: Object,
  routes: Object,
  app: App
};

export default class AppContainer extends React.Component {

  props: Props;

  render () {
    const { history, routes, app } = this.props

    return (
      <Router history={history} children={routes} app={app} />
    )
  }
}
