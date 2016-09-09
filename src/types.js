// @flow
import React from 'react'

import type { Element } from 'react'
import type { $Refinement } from 'tcomb'
import type {
  Store as ReduxStore,
  Reducer as ReduxReducer,
  Dispatch as ReduxDispatch
} from 'redux'

//
// models
//

export type ReactElement = Element<any> & $Refinement<typeof React.isValidElement>;

export type User = {
  email: string
};

//
// api
//

export interface Api {
  doLogin(email: string, password: string): Promise<User | Error>;
  doLogout(): Promise<{} | Error>;
}

//
// effects
//

type DoLogin = {
  type: 'DO_LOGIN',
  email: string,
  password: string
};

type DoLogout = {
  type: 'DO_LOGOUT'
};

type DoNavigate = {
  type: 'DO_NAVIGATE',
  path: string
};

export type Effect
  = DoLogin
  | DoLogout
  | DoNavigate;

//
// state
//

export type State = {
  effect: ?Effect,
  error: ?string,
  user: ?User
};

//
// actions
//

type LoginRequested = {
  type: 'LOGIN_REQUESTED',
  email: string,
  password: string
};

type LoginSucceeded = {
  type: 'LOGIN_SUCCEEDED',
  user: User
};

type LoginFailed = {
  type: 'LOGIN_FAILED',
  error: Error
};

type LogoutRequested = {
  type: 'LOGOUT_REQUESTED'
};

type LogoutSucceeded = {
  type: 'LOGOUT_SUCCEEDED'
};

type LogoutFailed = {
  type: 'LOGOUT_FAILED',
  error: Error
};

export type Action
  = LoginRequested
  | LoginSucceeded
  | LoginFailed
  | LogoutRequested
  | LogoutSucceeded
  | LogoutFailed
  ;

//
// redux
//

const isReduxAction = (x: Object) => x.type.indexOf('@@redux/') === 0
const isThirdPartyAction = (x: Object) => isReduxAction(x)
export type ThirdPartyAction = Object & $Refinement<typeof isThirdPartyAction>;

export type Store = ReduxStore<State, Action>;

export type Reducer = ReduxReducer<State, Action, ThirdPartyAction>;

export type Dispatch = ReduxDispatch<Action>;

export type Listener = (state: State) => void;
