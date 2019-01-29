import { Props } from "react";
import * as React from "react";
import { Tools } from "../../utils/Tools";
import "./index.scss";

/**
 * 使用react 自带的 props
 */
export class HeaderContent extends React.Component<Props<any>> {
    public state = {
        userName: 'admin',
        sysTime: null,
        weather: '天气',
    };

    constructor(props: any) {
        super(props);
    }

    componentWillMount(): void {
        setInterval(() => {
            const sysTime = Tools.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }

    render(): React.ReactNode {
        return (
            <div className="header">
                <div className="header-top">
                    <div>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </div>
                </div>
                <div className="header-sub">
                    <div className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt=""/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
