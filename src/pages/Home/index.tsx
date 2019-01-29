import * as React from "react";

/**
 * interface 声明以 I 开头 + 组件名 + Props / State (大驼峰规范)
 */
export interface IHomeProps{
    name: string;
}

interface IHomeState {
    // 常量命令 大写连接
    PAGE_NAME: string;
    Time: string;
}

export class Home extends React.Component<IHomeProps, IHomeState>{

    constructor(props: IHomeProps) {
        super(props)
    }

    componentWillMount(): void {
        console.log(this.props.name);
        this.setState({
            PAGE_NAME: '主页'
        });
        this.setState({
            Time: '2019-1-22'
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                当前页面为: {this.state.PAGE_NAME}, 时间为: {this.state.Time}
            </div>
        );
    }

}
