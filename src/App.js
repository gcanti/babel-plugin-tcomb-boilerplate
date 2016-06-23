// @flow
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import type { Unsubscriber } from 'redux'
import type {
  State,
  Store,
  Listener
} from './types'

export default class App {

  store: Store;
  history: Object;

  constructor(history: Object, preloadedState?: State) {
    this.history = history
    this.store = createStore(reducer, preloadedState, applyMiddleware(createLogger()))
  }

  subscribe(listener: Listener): Unsubscriber {
    return this.store.subscribe(() => {
      listener(this.getState())
    })
  }

  //
  // queries
  //

  getState(): State {
    return this.store.getState()
  }

  //
  // commands
  //

  doNavigate(path: string) {
    this.history.push(path)
  }

  doLogin(email: string, password: string): void {
    this.store.dispatch({
      type: 'LOGIN_REQUESTED',
      email,
      password
    })
  }

}