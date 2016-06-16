// @flow
import ReactDOM from 'react-dom'
import React from 'react'
import type { Component, Element } from 'react'
import { createStore } from 'redux'

type ReduxInitAction = { type: '@@redux/INIT' };

type MsgShape = { type: any };

export type Init<Model> = () => Model;

export type Update<Model, Msg> = (msg: Msg, model: Model) => Model;

export type Dispatch<Msg> = (msg: Msg) => void;

export type View<Model, Msg> = (model: Model, dispatch: Dispatch<Msg>) => Element;

export type Program<Model, Msg: MsgShape> = {
  init: Init<Model>,
  view: View<Model, Msg>,
  update: Update<Model, Msg>
};

export type Store<Model, Msg> = {
  dispatch(msg: Msg): any;
  getState(): Model;
  subscribe(listener: Function): Function;
};

export type App<Model, Msg> = {
  dispatch: Dispatch<Msg>,
  render: () => Component,
  store: Store<Model, Msg>
};

export function forwardTo<MsgA, MsgB>(dispatch: Dispatch<MsgA>, map: (msg: MsgB) => MsgA): Dispatch<MsgB> {
  return (msg: MsgB) => {
    dispatch(map(msg));
  };
}

export default function beginnerProgram<Model, Msg: MsgShape>({ init, view, update} : Program): App<Model, Msg> {

  type Action = ReduxInitAction | Msg;

  function dispatch(msg: Msg): void {
    store.dispatch(msg)
  }

  function reducer(model: Model = init(), action: Action): Model {
    if (action.type === '@@redux/INIT') {
      return model
    }
    return update(action, model)
  }

  const store: Store<Model, Msg> = createStore(reducer)

  function render() {
    return ReactDOM.render(view(store.getState(), dispatch), document.getElementById('app'))
  }

  store.subscribe(render)
  render()

  return {
    dispatch,
    render,
    store
  }
}
