// @flow
import { render } from 'react-dom'
import createRouter from './createRouter'
import history from './history'
import App from './App'

const app = new App(history)
const router = createRouter(app)
render(router, document.getElementById('app'))

window.app = app
