import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './assets/sass/main.scss'
import App from './pages/App'
import registerServiceWorker from './pwa/registerServiceWorker'
import AppRouter from './router'

import stores from './stores'

ReactDOM.render(
  <Provider {...stores}>
    <App>
      <AppRouter />
    </App>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
