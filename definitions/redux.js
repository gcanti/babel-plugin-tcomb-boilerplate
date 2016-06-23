declare module 'redux' {

  declare type Dispatch<Action> = (action: Action) => any;

  declare type Unsubscriber = () => void;

  declare type Store<State, Action> = {
    dispatch: Dispatch<Action>;
    getState(): State;
    subscribe(listener: () => any): Unsubscriber;
  };

  declare type Reducer<State, Action, ThirdPartyAction> = (state: State, action: Action | ThirdPartyAction) => State;

  declare type Middleware<State, Action> = (store: Store<State, Action>) => (next: Dispatch<Action>) => (action: Action) => State;

  declare var exports: {
    createStore<State, Action, ThirdPartyAction>(reducer: Reducer<State, Action, ThirdPartyAction>, preloadedState?: State): Store<State, Action>;
    combineReducers<State, Action, ThirdPartyAction>(reducers: Object): Reducer<State, Action, ThirdPartyAction>;
    applyMiddleware<State, Action>(...middlewares: Array<Middleware<State, Action>>): void;
    compose(...fn: Array<Function>): Function;
  }
}