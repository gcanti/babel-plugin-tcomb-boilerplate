// @flow
import React from 'react'
import type { TodoText } from '../types'

type Props = {
  completed: boolean,
  text: TodoText,
  onClick: Function
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
