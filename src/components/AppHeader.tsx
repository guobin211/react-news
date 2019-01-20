import * as React from 'react';
import logo from "../logo.svg";

/**
 * 从父组件传过来的输入属性 input
 */
export interface Props {
    children: string;
    childrenClick: any;
}

class AppHeader extends React.Component<Props, object> {
    public state = {
        onChange: '',
        title: '排序算法',
    };
    /**
     * 冒泡传出事件 output
     * @param e
     */
    public selfClick = (e: string) => {
        console.log('self' + e);
        this.props.childrenClick(e);
    };

    public componentWillMount(): void {
        console.log("将要挂载")
    }

    public componentDidMount(): void {
        console.log("已经挂载")
    }

    public componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        console.log("将要收到父组件的值")
    }

    public shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<object>, nextContext: any): boolean {
        console.log("是否要更新组件");
        return true;
    }

    public componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<object>, nextContext: any): void {
        console.log("将要更新组件")
    }

    public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<object>, snapshot?: any): void {
        console.log("更新完毕")
    }

    public componentWillUnmount(): void {
        console.log("将要卸载组件")
    }

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
