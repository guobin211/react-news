import { Card } from "antd";
import React from "react";
// import { BaseForm } from "../../components/BaseForm";
import { Axios } from "../../service/axios";

interface IWindow extends Window {
  BMap: any;
  BMAP_ANCHOR_TOP_RIGHT: any;
}

declare var window: IWindow;

export class BMap extends React.Component {

  state = {
    bikeInfo: {},
    totalCount: undefined
  }

  map: any = {}

  params = {
    page: 1
  }

  constructor(props: any) {
    super(props)
  }

  // 列表请求
  requestList = () => {
    Axios.ajax({
      url: '/map/bike_list',
      data: {
        params: this.params
      }
    }).then((res: any) => {
      if (res) {
        this.setState({
          totalCount: res.result.totalCount
        })
        this.renderMap(res.result);
      }
    })
  }

  // 查询表单
  handleFilterSubmit = (filterParams: any) => {
    this.params = filterParams;
    this.requestList();
  };

  componentDidMount() {
    this.requestList();
  }

  // 渲染地图
  renderMap = (res: any) => {
    const list = res.route_list;
    this.map = new window.BMap.Map("container", {enableMapClick: false});
    const gps1 = list[0].split(',');
    const startPoint = new window.BMap.Point(gps1[0], gps1[1]);
    const gps2 = list[list.length - 1].split(',');
    const endPoint = new window.BMap.Point(gps2[0], gps2[1]);
    this.map.centerAndZoom(endPoint, 11);
    // map.clearOverlays();
    // 添加起始图标
    const startPointIcon = new window.BMap.Icon("resource/assets/start_point.png", new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42)
    });

    const bikeMarkerStart = new window.BMap.Marker(startPoint, {icon: startPointIcon});
    this.map.addOverlay(bikeMarkerStart);

    const endPointIcon = new window.BMap.Icon("resource/assets/end_point.png", new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42)
    });
    const bikeMarkerEnd = new window.BMap.Marker(endPoint, {icon: endPointIcon});
    this.map.addOverlay(bikeMarkerEnd);

    const routeList: any[] = [];
    list.forEach((item: any) => {
      const p = item.split(",");
      const point = new window.BMap.Point(p[0], p[1]);
      routeList.push(point);
    })
    // 行驶路线
    const polyLine = new window.BMap.Polyline(routeList, {
      strokeColor: "#ef4136",
      strokeWeight: 3,
      strokeOpacity: 1
    });
    this.map.addOverlay(polyLine);

    // 服务区路线
    const serviceList = res.service_list;
    const servicePoints: any[] = [];
    serviceList.forEach((item: any) => {
      const point = new window.BMap.Point(item.lon, item.lat);
      servicePoints.push(point);
    })
    // 画线
    const polyServiceLine = new window.BMap.Polyline(servicePoints, {
      strokeColor: "#ef4136",
      strokeWeight: 3,
      strokeOpacity: 1
    });
    this.map.addOverlay(polyServiceLine);

    // 添加地图中的自行车
    const bikeList = res.bike_list;
    const bikeIcon = new window.BMap.Icon("resource/assets/bike.jpg", new window.BMap.Size(36, 42), {
      imageSize: new window.BMap.Size(36, 42),
      anchor: new window.BMap.Size(18, 42)
    });
    bikeList.forEach((item: any) => {
      const p = item.split(",");
      const point = new window.BMap.Point(p[0], p[1]);
      const bikeMarker = new window.BMap.Marker(point, {icon: bikeIcon});
      this.map.addOverlay(bikeMarker);
    })
    // 添加地图控件
    this.addMapControl();
  };

  // 添加地图控件
  addMapControl = () => {
    const map = this.map;
    // 左上角，添加比例尺
    const top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
    const top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
    // 添加控件和比例尺
    map.addControl(top_right_control);
    map.addControl(top_right_navigation);
    map.enableScrollWheelZoom(true);
    // legend.addLegend(map);
  };

  render(): React.ReactNode {
    return (
      <div>
        <Card>
          {/*<BaseForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>*/}
        </Card>
        <Card style={{marginTop: 10}}>

          <div>共{this.state.totalCount}辆车</div>
          <div id="container" style={{height: 500}}/>
        </Card>
      </div>
    );
  }
}
