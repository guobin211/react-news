import * as React from 'react';
import logo from "../logo.svg";

class AppHeader extends React.Component {
    public title: string = 'Welcome to React';
    public render(): React.ReactNode {
        return (
            <header className="app-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="app-title">{this.title}</h1>
            </header>
        );
    }
}

export default AppHeader;
