// @flow
import React from 'react'
import { propTypes } from 'tcomb-react'
import Alert from './Alert'

import type { ReactElement } from '../types'
import type { $Reify } from 'tcomb'

type Props = {
  error: ?string,
  doLogin: (email: string, password: string) => void
};

function getError(props): ?ReactElement {
  if (props.error) {
    return <Alert type="danger">{props.error}</Alert>
  }
  return null
}

export default function Login(props: Props): ReactElement {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Log in
              </div>
              <div className="panel-body">
                { getError(props) }
                <button className="btn btn-default" onClick={ () => props.doLogin('user@domain.com', 'password') }>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = propTypes((({}: any): $Reify<Props>))
