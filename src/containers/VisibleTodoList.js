// @flow
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import type {
  Dispatch,
  State,
  Todo,
  Filter
} from '../types'

type StateProps = {
  todos: Array<Todo>
};

type DispatchProps = {
  onTodoClick: (id: number) => void
};

const getVisibleTodos = (todos: Array<Todo>, filter: Filter): Array<Todo> => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default :
      return todos
  }
}

const mapStateToProps = (state: State): StateProps => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
