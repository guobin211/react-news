import * as React from 'react';
import logo from "../logo.svg";

export interface Props {
    children: string;
    childrenClick: any;
}

class AppHeader extends React.Component<Props, object> {
    public state = {
        onChange: '',
        title: '排序算法',
    };

    public selfClick = (e: string) => {
        console.log('self' + e);
        this.props.childrenClick(e);
    };

    public render(): React.ReactNode {
        return (
            <header className="app-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h3 className="app-title">{this.props.children}</h3>
                <h4 className="app-title">{this.state.title}</h4>
                <button type="button" className="btn btn-primary" onClick={() => this.selfClick("子组件发出消息")}>通讯</button>
            </header>
        );
    }
}

export default AppHeader;
