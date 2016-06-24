// @flow
import type App from './App'
import type {
  Effect,
  Action,
  User
} from './types'

function runDoLogin(effect, app) {
  return app.api.doLogin(effect.email, effect.password)
    .then(res => {
      if (res.code === 500) {
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

function runDoLogout(effect, app) {
  return app.api.doLogout()
    .then(() => {
      return {
        type: 'LOGOUT_SUCCEEDED'
      }
    })
}

function runDoNavigate(effect, app) {
  setTimeout(() => app.doNavigate(effect.path), 0)
}

export default function runEffect(effect: Effect, app: App): ?Promise<Action> {
  switch (effect.type) {
    case 'DO_LOGIN' :
      return runDoLogin(effect, app)
    case 'DO_NAVIGATE' :
      return runDoNavigate(effect, app)
    case 'DO_LOGOUT' :
      return runDoLogout(effect, app)
  }
}
