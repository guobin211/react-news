import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.less'
import 'antd/dist/antd.less'
import { Loading } from './components/Loading'
import { appService } from './core/app-service'
import { Provider } from 'react-redux'
import store from './store'
import { Routes } from './routes'
import GroupRoute from './components/GroupRoute'

ReactDOM.render(Loading, document.getElementById('root'))

appService
  .bootstrap()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Suspense fallback={Loading}>
          <GroupRoute routes={Routes} />
        </Suspense>
      </Provider>,
      document.getElementById('root')
    )
  })
  .catch()

serviceWorker.unregister()
