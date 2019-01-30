import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { App } from "./App";
import { Login } from "./pages/Login";
import { Admin } from "./Admin";

export class AppRouter extends React.Component {
    /**
     * 根路由
     */
    render(): React.ReactNode {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" render={() => <Admin/>}/>
                    </Switch>
                </App>
            </Router>
        );
    }
}
