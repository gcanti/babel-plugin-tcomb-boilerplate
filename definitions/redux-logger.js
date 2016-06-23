import type { Middleware } from 'redux'

declare module 'redux-logger' {

  declare var exports: () => Middleware

}