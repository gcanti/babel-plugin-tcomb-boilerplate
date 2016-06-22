// @flow
import React from 'react'

import type { Element } from 'react'
import type { $Refinement } from 'tcomb'
import type {
  Store as ReduxStore,
  Reducer as ReduxReducer,
  Dispatch as ReduxDispatch
} from 'redux'

export type User = {
  email: string
};

export type State = {
  user: ?User
};

const isReduxAction = (x: Object) => x.type.indexOf('@@redux/') === 0
const isThirdPartyAction = (x: Object) => isReduxAction(x)
export type ThirdPartyAction = Object & $Refinement<typeof isThirdPartyAction>;

export type LOGIN_REQUESTED = {
  type: 'LOGIN_REQUESTED',
  email: string,
  password: string
};

// TODO
export type Action
  = LOGIN_REQUESTED
  ;

export type ReactElement = Element & $Refinement<typeof React.isValidElement>;

export type Store = ReduxStore<State, Action>;

export type Reducer = ReduxReducer<State, Action, ThirdPartyAction>;

export type Dispatch = ReduxDispatch<Action>;
