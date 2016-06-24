// @flow
import React from 'react'
import { propTypes } from 'tcomb-react'

import type {
  ReactElement,
  User
} from '../types'
import type { $Reify } from 'tcomb'

export type Props = {
  user: User,
  doLogout: () => void
};

export default function Home(props: Props): ReactElement {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Home
              </div>
              <div className="panel-body">
                Welcome { props.user.email }
              </div>
              <div className="panel-body">
                <button className="btn btn-default" onClick={() => props.doLogout()}>Log out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = propTypes((({}: any): $Reify<Props>))