declare module 'redux' {

  declare type Dispatch<Action> = (action: Action) => any;

  declare type Store<State, Action> = {
    dispatch: Dispatch<Action>;
    getState(): State;
    subscribe(listener: () => any): () => void;
  };

  declare type Reducer<State, Action> = (state: State, action: Action) => State;

  declare var exports: {
    createStore<State, Action>(reducer: Reducer<State, Action>): Store<State, Action>;
    combineReducers<State, Action>(reducers: Object): Reducer<State, Action>;
  }
}