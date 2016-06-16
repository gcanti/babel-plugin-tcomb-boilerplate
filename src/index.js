// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'

import type {
  State,
  Action
} from './types'

function reducer(state: State = 0, action: Action): State {
  switch(action.type) {
    case 'INCREMENT' :
      return state + action.delta
    case 'DECREMENT' :
      return state - action.delta
  }
  return state
}

const store = createStore(reducer)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)
