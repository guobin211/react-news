import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { App } from "./App";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login";
import { Admin } from "./Admin";

export class AppRouter extends React.Component {
  /**
   * 根路由
   */
  render(): React.ReactNode {
    return (
      <Router>
        {/* app 装载路由 */}
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/404" component={NotFound}/>
            <Route path="/" render={() => <Admin/>}/>
          </Switch>
        </App>
      </Router>
    );
  }
}
