// @flow
export type State = number;
export type ReduxInitAction = { type: '@@redux/INIT' };
export type Action = ReduxInitAction
  | { type: 'INCREMENT', delta: number }
  | { type: 'DECREMENT', delta: number };

export type Store = {
  dispatch(action: Action): any;
  getState(): State;
  subscribe(listener: Function): Function;
};

