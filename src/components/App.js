// @flow
import React from 'react'
import { props } from 'tcomb-react'

import type {
  Store
} from '../types'

type Props = {
  store: Store
};

type State = {
  count: number
};

@props(Props)
export default class App extends React.Component<void, Props, State> {

  unsubscribe: () => void;
  state: State = { count: 0 };

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({ count: this.props.store.getState() })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  increment: () => void = () => {
    this.props.store.dispatch({ type: 'INCREMENT', delta: 1 })
  };

  decrement: () => void = () => {
    this.props.store.dispatch({ type: 'DECREMENT', delta: 1 })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div>Count: {this.state.count}</div>
            <button className="btn btn-default" onClick={this.increment}>+</button>
            <button className="btn btn-default" onClick={this.decrement}>-</button>
          </div>
        </div>
      </div>
    )
  }

}