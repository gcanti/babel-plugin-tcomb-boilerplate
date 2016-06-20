// @flow
import type {
  Filter,
  Action
} from '../types'

export default function visibilityFilter(state: Filter = 'SHOW_ALL', action: Action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
