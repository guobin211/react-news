import { Card } from "antd";
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
// 引入饼图和折线图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/title';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import React from "react";
import { Theme } from '../chartThemes';

export class LineChart extends React.Component {

  state = {}

  componentWillMount() {
    echarts.registerTheme('default', Theme);
  }

  getOption() {
    return {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: [
            1000,
            2000,
            1500,
            3000,
            2000,
            1200,
            800
          ]
        }
      ]
    };
  }

  getOption2() {
    return {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['OFO订单量', '摩拜订单量']
      },
      xAxis: {
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO订单量',
          type: 'line',
          stack: '总量',
          data: [
            1200,
            3000,
            4500,
            6000,
            8000,
            12000,
            20000
          ]
        },
        {
          name: '摩拜订单量',
          type: 'line',
          stack: '总量',
          data: [
            1000,
            2000,
            5500,
            6000,
            8000,
            10000,
            12000
          ]
        },
      ]
    };
  }

  getOption3() {
    return {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: [
            1000,
            2000,
            1500,
            3000,
            2000,
            1200,
            800
          ],
          areaStyle: {}
        }
      ]
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <Card title="折线图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="default"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }}/>
        </Card>
        <Card title="折线图表之二" style={{marginTop: 10}}>
          <ReactEcharts
            option={this.getOption2()}
            theme="default"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }}/>
        </Card>
        <Card title="折线图表之三" style={{marginTop: 10}}>
          <ReactEcharts
            option={this.getOption3()}
            theme="default"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }}/>
        </Card>
      </div>

    );
  }
}
