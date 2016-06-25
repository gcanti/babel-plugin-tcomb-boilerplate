// @flow
import { combineReducers } from 'redux'
import effect from './effect'
import error from './error'
import user from './user'

import type { Reducer } from '../types'

const reducer: Reducer = combineReducers({
  effect,
  error,
  user
})

export default reducer
