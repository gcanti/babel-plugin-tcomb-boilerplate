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

function runDoLogin(effect) {
  return doLogin(effect.email, effect.password)
    .then(res => {
      if (res.code === 404) {
        return {
          type: 'LOGIN_FAILED'
        }
      }
      return {
        type: 'LOGIN_SUCCEEDED',
        user: (res.data: User)
      }
    })
}

function runDoNavigate(effect, app) {
  const path = effect.path
  setTimeout(() => app.doNavigate(path), 0)
}

export default function runEffect(effect: Effect, app: App): ?Promise<Action> {
  switch (effect.type) {
    case 'DO_LOGIN' :
      return runDoLogin(effect)
    case 'DO_NAVIGATE' :
      runDoNavigate(effect, app)
  }
}
