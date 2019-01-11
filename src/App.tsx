import * as React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSideNav from "./components/AppSideNav";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <AppHeader/>
                <AppSideNav/>
            </div>
        );
    }
}

export default App;
