import * as React from "react";
import { Props } from "react";

interface IState {
    PAGE_NAME: string;
    Time: string;
}

export class Home extends React.Component<Props<any>, IState>{

    // constructor(props: any) {super(props);}

    componentWillMount(): void {
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
