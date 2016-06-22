// @flow
import type {
  Todo,
  Action,
  ThirdPartyAction
} from '../types'

function toggleTodo(id) {
  return todo => {
    if (todo.id !== id) {
      return todo
    }
    return Object.assign({}, todo, {
      completed: !todo.completed
    })
  }
}

function createTodo(id, text) {
  return { id, text, completed: false }
}

export default function todos(state: Array<Todo> = [], action: Action | ThirdPartyAction): Array<Todo> {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(createTodo(action.id, action.text))
    case 'TOGGLE_TODO':
      return state.map(toggleTodo(action.id))
    default:
      return state
  }
}

