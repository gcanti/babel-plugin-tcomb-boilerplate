// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import type {
  Dispatch
} from '../types'

type Props = {
  dispatch: Dispatch
};

const AddTodo = (props: Props) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const ConnectedAddTodo = connect()(AddTodo)

export default ConnectedAddTodo
