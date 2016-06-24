// @flow

function delayedResolve(delta: number, val: any): Promise {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), delta)
  })
}

function delayedReject(delta: number, val: any): Promise {
  return new Promise((_, reject) => {
    setTimeout(() => reject(val), delta)
  })
}

function doLogin(email: string, password: string) {
  if (email === 'user@domain.com' && password === 'password') {
    return delayedResolve(300, {
      code: 200,
      data: {
        email
      }
    })
  }
  return delayedReject(300, {
    code: 500
  })
}

function doLogout() {
  return delayedResolve(300, {
    code: 200
  })
}

export default {
  doLogin,
  doLogout
}
