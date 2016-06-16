// @flow
import React from 'react'
import counter from './counter'
import { forwardTo } from './beginnerProgram'
import t from 'tcomb'
import type { Dispatch } from './beginnerProgram'
import type { Model as CounterModel, Msg as CounterMsg } from './counter'

export type Model
  = {
    top: CounterModel,
    bottom: CounterModel
  };

export type Msg
  = { type: 'RESET' }
  | { type: 'TOP', msg: CounterMsg }
  | { type: 'BOTTOM', msg: CounterMsg };

function init() {
  return {
    top: counter.init(),
    bottom: counter.init()
  }
}

function update(msg: Msg, model: Model): Model {
  switch (msg.type) {
    case 'RESET' :
      return init()
    case 'TOP' :
      return t.update(model, {
        top: { $set: counter.update(msg.msg, model.top) }
      })
    case 'BOTTOM' :
      return t.update(model, {
        bottom: { $set: counter.update(msg.msg, model.bottom) }
      })
  }
  return model
}

function view(model: Model, dispatch: Dispatch<Msg>) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4">
          { counter.view(model.top, forwardTo(dispatch, (msg: CounterMsg) => ({ type: 'TOP', msg }))) }
          { counter.view(model.bottom, forwardTo(dispatch, (msg: CounterMsg) => ({ type: 'BOTTOM', msg }))) }
          <button className="btn btn-default" onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default { init, view, update }
