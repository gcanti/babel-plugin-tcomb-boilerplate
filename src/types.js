// @flow
import type { $Refinement } from 'tcomb'
import type { Store as ReduxStore } from 'redux'

const isInteger = n => n % 1 === 0
const isPositive = n => n >= 1

type Integer = number & $Refinement<typeof isInteger>;
type PositiveInteger = Integer & $Refinement<typeof isPositive>;

export type State = Integer;
export type ReduxInitAction = { type: '@@redux/INIT' };
export type Action = ReduxInitAction
  | { type: 'INCREMENT', delta: PositiveInteger }
  | { type: 'DECREMENT', delta: PositiveInteger };

export type Store = ReduxStore<State, Action>;

