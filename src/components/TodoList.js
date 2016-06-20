// @flow
import React from 'react'
import Todo from './Todo'
import type { Todo as TodoT } from '../types'

type Props = {
  todos: Array<TodoT>,
  onTodoClick: Function
};

const TodoList = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
