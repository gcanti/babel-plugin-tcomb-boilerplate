// @flow
import { render } from 'react-dom'
import createRouter from './createRouter'
import history from './history'
import App from './App'
import runEffect from './runEffect'

const app = new App(history)
app.subscribe(({ effect }) => {
  if (effect) {
    console.log('effect', effect) // eslint-disable-line
    const actionPromise = runEffect(effect, app)
    if (actionPromise) {
      actionPromise.then(action => app.store.dispatch(action))
    }
  }
})

const router = createRouter(app)
render(router, document.getElementById('app'))

window.app = app
