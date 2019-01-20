import * as React from 'react';
import './App.scss';
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

    public getClick(e: any) {
        e = '父组件收到消息' + e;
        console.log(e);
        this.setState({
            childrenClick: e,
        })
    };

    public render() {
        return (
            <div className="App">
                <AppHeader key="header" children={this.state.message} childrenClick={(e: any) => this.getClick(e)}/>
                <AppSideNav/>
            </div>
        );
    }
}

export default App;
