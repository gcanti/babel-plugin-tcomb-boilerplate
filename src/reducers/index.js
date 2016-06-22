// @flow
import { combineReducers } from 'redux'
import user from './user'

import type { Reducer } from '../types'

const reducer: Reducer = combineReducers({
  user
})

export default reducer
