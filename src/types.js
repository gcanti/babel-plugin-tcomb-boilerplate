// @flow
import React from 'react'
import type { $Refinement } from 'tcomb'
import type {
  Store as ReduxStore,
  Reducer as ReduxReducer,
  Dispatch as ReduxDispatch
} from 'redux'

const isInteger = n => n % 1 === 0
type Integer = number & $Refinement<typeof isInteger>;

const isNotEmptyString = s => s.length > 0
type NotEmptyString = string & $Refinement<typeof isNotEmptyString>;

export type TodoId = Integer;

export type TodoText = NotEmptyString;

export type Todo = {
  id: TodoId,
  text: TodoText,
  completed: boolean
};

export type Filter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export type State = {
  todos: Array<Todo>,
  visibilityFilter: Filter
};

export type AddTodoAction = {
  type: 'ADD_TODO',
  id: TodoId,
  text: TodoText
};

export type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  id: TodoId
};

export type SetVisibilityFilterAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: Filter
};

const isReduxAction = (x: Object) => x.type.indexOf('@@redux/') === 0
const isThirdPartyAction = (x: Object) => isReduxAction(x)
export type ThirdPartyAction = Object & $Refinement<typeof isThirdPartyAction>;

export type Action
  = AddTodoAction
  | ToggleTodoAction
  | SetVisibilityFilterAction
  ;

export type ReactElement = Element & $Refinement<typeof React.isValidElement>;

export type Store = ReduxStore<State, Action>;

export type Reducer = ReduxReducer<State, Action, ThirdPartyAction>;

export type Dispatch = ReduxDispatch<Action>;
