// @flow
import {
  doLogin
} from './api'

import type App from './App'
import type {
  Effect,
  Action,
  User
} from './types'

export default function runEffect(effect: Effect, app: App): ?Promise<Action> {
  switch (effect.type) {
    case 'DO_LOGIN' :
      return doLogin(effect.email, effect.password)
        .then(res => {
          if (res.code === 404) {
            return { type: 'LOGIN_FAILED' }
          }
          return { type: 'LOGIN_SUCCEEDED', user: (res.data: User) }
        })
    case 'DO_NAVIGATE' :
      setTimeout(() => app.doNavigate(effect.path), 0)
  }
}
