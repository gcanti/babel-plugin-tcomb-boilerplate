// @flow
import { combineReducers } from 'redux'
import effect from './effect'
import user from './user'

import type { Reducer } from '../types'

const reducer: Reducer = combineReducers({
  effect,
  user
})

export default reducer
