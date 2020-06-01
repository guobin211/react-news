import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './index.less'
import 'antd/dist/antd.less'
import { Loading } from './components/Loading'
import { appService } from './core/app-service'
import { Provider } from 'react-redux'
import store from './store'
import TestRoute from './routes/TestRoute'

const Admin = React.lazy(() => import('./routes/AdminRoute'))
const Login = React.lazy(() => import('./routes/LoginRoute'))
const Visitor = React.lazy(() => import('./routes/VisitorRoute'))

ReactDOM.render(Loading, document.getElementById('root'))

appService
  .bootstrap()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Suspense fallback={Loading}>
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/visitor">
                <Visitor />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/test">
                <TestRoute />
              </Route>
              <Route path="">
                <TestRoute />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Provider>,
      document.getElementById('root')
    )
  })
  .catch()

serviceWorker.unregister()
