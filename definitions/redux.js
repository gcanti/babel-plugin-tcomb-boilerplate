declare module 'redux' {

  declare type Store<State, Action> = {
    dispatch(action: Action): any;
    getState(): State;
    subscribe(listener: () => any): () => void;
  };

  declare var exports: {
    createStore<State, Action>(reducer: (state: State, action: Action) => State): Store<State, Action>;
  }
}