// @flow
import type {
  Action,
  ThirdPartyAction
} from '../types'

export default function error(state: ?string = null, action: Action | ThirdPartyAction): ?string {
  switch (action.type) {
    case 'LOGIN_FAILED' :
      return 'Invalid email / password'
    case 'LOGOUT_FAILED' :
      return 'Logout failed'
  }
  return null
}
