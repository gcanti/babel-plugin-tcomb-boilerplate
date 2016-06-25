// @flow
import { render } from 'react-dom'
import createRouter from './createRouter'
import history from './history'
import App from './App'
import runEffect from './runEffect'
import api from './api/fake'

const app = new App(history, api)
app.subscribe(({ effect }) => {
  if (effect) {
    const eff = effect // save the reference so Flow is happy
    Promise.resolve().then(() => {
      console.log('running effect:', eff) // eslint-disable-line
      const actionPromise = runEffect(eff, app)
      if (actionPromise) {
        actionPromise.then(action => app.store.dispatch(action))
      }
    })
  }
})

const router = createRouter(app)
render(router, document.getElementById('app'))

window.app = app
