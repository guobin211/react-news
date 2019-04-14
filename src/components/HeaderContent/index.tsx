import { Props } from "react";
import * as React from "react";
import { Tools } from "../../utils/Tools";
import { Axios } from "../../service/axios";
import "./index.scss";

/**
 * 使用react 自带的 props
 */
export class HeaderContent extends React.Component<Props<any>> {
  public state = {
    userName: 'admin',
    sysTime: undefined,
    weather: '天气',
    dayPictureUrl: undefined,
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
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    const city = '北京';
    Axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res: any) => {
      if (res.status === 'success') {
        const data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
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
                            <img src={this.state.dayPictureUrl} alt=""/>
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
