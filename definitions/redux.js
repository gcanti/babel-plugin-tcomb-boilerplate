declare module 'redux' {

  declare type Store<State, Action> = {
    dispatch(action: Action): any;
    getState(): State;
    subscribe(listener: () => any): () => void;
  };

  declare type Reducer<State, Action> = (state: State, action: Action) => State;

  declare var exports: {
    createStore<State, Action>(reducer: Reducer<State, Action>): Store<State, Action>;
    combineReducers(reducers: Object): Reducer<State, Action>;
  }
}