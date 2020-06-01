import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './index.less'
import 'antd/dist/antd.less'

const Admin = React.lazy(() => import('./routes/AdminRoute'))
const Login = React.lazy(() => import('./routes/LoginRoute'))
const Visitor = React.lazy(() => import('./routes/VisitorRoute'))

ReactDOM.render(
  <Suspense fallback={<div>loading</div>}>
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
        <Route path="">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
serviceWorker.unregister()
