// @flow
import React from 'react'
import { props } from 'tcomb-react'
import type { ReactRouterHandler } from '../types'

interface Props extends ReactRouterHandler {}

@props(Props)
export default class About extends React.Component<void, Props, void> {
  render() {
    return <div>About</div>
  }
}