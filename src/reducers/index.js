// @flow
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import type { Reducer } from '../types'

const todoApp: Reducer = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
