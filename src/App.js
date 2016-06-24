// @flow
import t from 'tcomb'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import type { Unsubscriber } from 'redux'
import type {
  Api,
  State,
  Store,
  Listener
} from './types'

export default class App {

  history: Object;
  api: Api;
  store: Store;

  constructor(history: Object, api: Api, preloadedState?: State) {
    this.history = history
    this.api = api
    this.store = createStore(reducer, preloadedState, applyMiddleware(createLogger()))
  }

  subscribe(listener: Listener): Unsubscriber {
    return this.store.subscribe(() => {
      listener(this.store.getState())
    })
  }

  //
  // queries
  //

  isAuthenticated(): boolean {
    return !t.Nil.is(this.store.getState().user)
  }

  //
  // commands
  //

  doNavigate(path: string): void {
    this.history.push(path)
  }

  doLogin(email: string, password: string): void {
    this.store.dispatch({
      type: 'LOGIN_REQUESTED',
      email,
      password
    })
  }

  doLogout(): void {
    this.store.dispatch({
      type: 'LOGOUT_REQUESTED'
    })
  }

}
