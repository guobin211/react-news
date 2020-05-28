import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const FormPage = React.lazy(() => import('../pages/FormPage'));

export interface AdminRouteProps {
}

export interface AdminRouteState {
}

export default class AdminRoute extends React.Component<AdminRouteProps, AdminRouteState>{

  render() {
    return (
      <div className="AdminRoute">
        HELLO AdminRouteState
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/admin/form">
                <FormPage/>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
