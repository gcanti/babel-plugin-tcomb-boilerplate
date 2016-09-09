// @flow
import React from 'react'
import { propTypes } from 'tcomb-react'

import type { ReactElement } from '../types'
import type { $Reify } from 'tcomb'

type Type = 'danger' | 'info' | 'warning' | 'success';

type Props = {
  type: Type,
  children?: any
};

export default function Alert(props: Props): ReactElement {
  return (
    <div className={`alert alert-${props.type}`}>{ props.children }</div>
  )
}

Alert.defaultProps = {
  type: 'info'
}

Alert.propTypes = propTypes((({}: any): $Reify<Props>))
