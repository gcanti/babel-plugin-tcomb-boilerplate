// @flow
import React from 'react'
import { Route } from 'react-router'
import { props } from 'tcomb-react'
import type { Paths } from '../types'

type Props = {
  path: Paths,
  component: any
};

@props(Props)
export default class WrappedRoute extends React.Component<void, Props, void> {
  render() {
    return <Route path={this.props.path} component={this.props.component} />
  }
}