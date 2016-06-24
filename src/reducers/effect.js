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
    case 'LOGOUT_REQUESTED' :
      return {
        type: 'DO_LOGOUT'
      }
    case 'LOGOUT_SUCCEEDED' :
      return {
        type: 'DO_NAVIGATE',
        path: '/login'
      }
  }
  return null
}

