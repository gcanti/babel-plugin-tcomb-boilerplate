// @flow
import type { Api } from '../types'

function delayedResolve<T>(delta: number, val: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), delta)
  })
}

function delayedReject<T>(delta: number, val: T): Promise<T> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(val), delta)
  })
}

function doLogin(email: string, password: string) {
  if (email === 'user@domain.com' && password === 'password') {
    return delayedResolve(300, {
      email
    })
  }
  return delayedReject(300, new Error('invalid_email_password'))
}

function doLogout() {
  return delayedResolve(300, {})
  // return delayedReject(300, new Error('internal_server_error'))
}

export default ({
  doLogin,
  doLogout
}: Api)
