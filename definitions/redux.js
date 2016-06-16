declare module 'redux' {
  declare var exports: {
    createStore: (reducer: Function) => Object;
  }
}