// @flow
import type {
  Effect,
  Action,
  ThirdPartyAction
} from '../types'

export default function effect(state: ?Effect = null, action: Action | ThirdPartyAction): ?Effect {
  switch (action.type) {
    case 'LOGIN_REQUESTED' :
      return {
        type: 'DO_LOGIN',
        email: action.email,
        password: action.password
      }
    case 'LOGIN_SUCCEEDED' :
      return {
        type: 'DO_NAVIGATE',
        path: '/home'
      }
  }
  return null
}

