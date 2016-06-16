// @flow
import React from 'react'
import { props } from 'tcomb-react'
import Link from './Link'
import type { ReactRouterHandler } from '../types'

interface Props extends ReactRouterHandler {}

@props(Props)
export default class App extends React.Component<void, Props, void> {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
}