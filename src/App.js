// @flow
import reducer from './reducers'
import { createStore } from 'redux'

import type { Unsubscriber } from 'redux'
import type {
  State,
  Store
} from './types'

export default class App {

  store: Store;
  history: Object;

  constructor(history: Object, preloadedState?: State) {
    this.history = history
    this.store = createStore(reducer, preloadedState)
  }

  subscribe(listener: (state: State) => void): Unsubscriber {
    return this.store.subscribe(() => {
      listener(this.store.getState())
    })
  }

  transitionTo(path: string) {
    this.history.push(path)
  }

  doLogin(email: string, password: string): void {
    this.store.dispatch({
      type: 'LOGIN_REQUESTED',
      email,
      password
    })
    this.transitionTo('/home')
  }

}