// @flow
import React from 'react'
import { Link } from 'react-router'
import { props } from 'tcomb-react'
import type { Paths } from '../types'

type Props = {
  to: Paths,
  children?: any // https://github.com/facebook/flow/issues/1964
};

@props(Props)
export default class WrappedLink extends React.Component<void, Props, void> {
  render() {
    return <Link to={this.props.to}>{this.props.children}</Link>
  }
}