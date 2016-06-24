// @flow
import type {
  User,
  Action,
  ThirdPartyAction
} from '../types'

export default function user(state: ?User = null, action: Action | ThirdPartyAction): ?User {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED' :
      return { email: 'user@domain.com' }
    case 'LOGOUT_SUCCEEDED' :
      return null
  }
  return state
}

