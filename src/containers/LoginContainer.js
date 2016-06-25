// @flow
import React from 'react'
import Login from '../components/Login'
import App from '../App'

import type { State } from '../types'
import type { Unsubscriber } from 'redux'

type Props = {
  app: App
};

export default class LoginContainer extends React.Component {

  props: Props;
  state: State;
  unsubscribe: Unsubscriber;

  constructor(props: Props) {
    super(props)
    this.state = this.props.app.store.getState()
  }

  doLogin: (email: string, password: string) => void = (email, password) => {
    this.props.app.doLogin(email, password)
  };

  componentDidMount() {
    this.unsubscribe = this.props.app.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return <Login error={this.state.error} doLogin={this.doLogin} />
  }

}
