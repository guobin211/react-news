import { HashRouter, Route, Switch } from "react-router-dom";
import { Admin } from "./Admin";
import { Home } from "./pages/Home";
import React from "react";

export class AppRouter extends React.Component {
    render(): React.ReactNode {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Admin} />
                    <Route path="/home" component={Home} />
                </Switch>
            </HashRouter>
        );
    }
}
