// @flow
import type {
  TodoId,
  TodoText,
  Filter,
  AddTodoAction,
  ToggleTodoAction,
  SetVisibilityFilterAction
} from '../types'

let nextTodoId = 0

export function addTodo(text: TodoText): AddTodoAction {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(id: TodoId): ToggleTodoAction {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function setVisibilityFilter(filter: Filter): SetVisibilityFilterAction {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

