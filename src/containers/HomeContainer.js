// @flow
import React from 'react'
import Home from '../components/Home'
import App from '../App'

import type { State } from '../types'
import type { Unsubscriber } from 'redux'

type Props = {
  app: App
};

export default class HomeContainer extends React.Component {

  props: Props;
  state: State;
  unsubscribe: Unsubscriber;

  constructor(props: Props) {
    super(props)
    this.state = this.props.app.store.getState()
  }

  doLogout: () => void = () => {
    this.props.app.doLogout()
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
    if (!this.state.user) {
      return null
    }
    return <Home error={this.state.error} user={this.state.user} doLogout={this.doLogout} />
  }

}
