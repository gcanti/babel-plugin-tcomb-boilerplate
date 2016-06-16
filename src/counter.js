// @flow
import React from 'react'
import type { Dispatch } from './beginnerProgram'
import type { $Refinement } from 'tcomb'

const isInteger = n => n % 1 === 0

type Integer
  = number & $Refinement<typeof isInteger>;

export type Model
  = Integer;

export type Msg
  = { type: 'INCREMENT' } | { type: 'DECREMENT' };

function init() {
  return 0
}

function update(msg: Msg, model: Model): Model {
  switch (msg.type) {
    case 'INCREMENT' :
      return model + 1
    case 'DECREMENT' :
      return model - 1
  }
  return model
}

function view(model: Model, dispatch: Dispatch<Msg>) {
  return (
    <div>
      <div>Count: {model}</div>
      <button className="btn btn-default" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button className="btn btn-default" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

export default { init, view, update }
