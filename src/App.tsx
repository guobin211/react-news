import * as React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSideNav from "./components/AppSideNav";

interface InitState {
    message: string,
    childrenClick: string,
}

class App extends React.Component {
    public state: InitState;
    constructor(props: any) {
        super(props);
        this.state = {
            childrenClick: '',
            message: 'React',
        }
    }

    public getClick(e: string) {
        e = '父组件收到消息' + e;
        this.setState({
            childrenClick: e
        })
    };

    public render() {
        return (
            <div className="App">
                <AppHeader key="header" children={this.state.message}/>
                <AppSideNav/>
            </div>
        );
    }
}

export default App;
