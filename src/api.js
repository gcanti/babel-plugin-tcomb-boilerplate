// @flow

function delayedResolve(delta: number, val: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), delta)
  })
}

function delayedReject(delta: number, val: any) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(val), delta)
  })
}

export function doLogin(email: string, password: string) {
  if (email === 'user@domain.com' && password === 'password') {
    return delayedResolve(200, {
      code: 200,
      data: {
        email
      }
    })
  }
  return delayedReject(200, {
    code: 404
  })
}

export function doLogout() {
  return delayedResolve(200, {
    code: 200
  })
}