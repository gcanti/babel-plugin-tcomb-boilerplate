declare module 'redux' {

  declare type Dispatch<Action> = (action: Action) => any;

  declare type Store<State, Action> = {
    dispatch: Dispatch<Action>;
    getState(): State;
    subscribe(listener: () => any): () => void;
  };

  declare type Reducer<State, Action, ReduxAction> = (state: State, action: Action | ReduxAction) => State;

  declare var exports: {
    createStore<State, Action, ReduxAction>(reducer: Reducer<State, Action, ReduxAction>, preloadedState?: State): Store<State, Action>;
    combineReducers<State, Action, ReduxAction>(reducers: Object): Reducer<State, Action, ReduxAction>;
  }
}