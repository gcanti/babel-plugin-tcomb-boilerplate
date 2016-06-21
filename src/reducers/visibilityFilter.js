// @flow
import type {
  Filter,
  Action,
  ReduxAction
} from '../types'

export default function visibilityFilter(state: Filter = 'SHOW_ALL', action: Action | ReduxAction) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
