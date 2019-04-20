import { Layout } from "antd";
import * as React from "react";
import { CSSProperties } from "react";

import { FooterContent } from "./components/FooterContent";
import { HeaderContent } from "./components/HeaderContent";
import { NavLeft } from "./components/NavLeft";
import { BMap } from "./pages/BMap";
import { Animate } from "./pages/canvas/Animate";
import { Basic } from "./pages/canvas/Basic";
import { High } from "./pages/canvas/High";
import { City } from "./pages/City";
import { BarChart } from "./pages/echarts/BarChart";
import { LineChart } from "./pages/echarts/LineChart";
import { PieChart } from "./pages/echarts/PieChart";
import { RegisterForm } from "./pages/form/Register";
import { Home, IHomeProps } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { LoginForm } from "./pages/form/Login";
import { HttpAjax } from "./pages/http/HttpAjax";
import { HttpFetch } from "./pages/http/HttpFetch";
import { BasicTable } from "./pages/table/BasicTable";
import { ReactiveTable } from "./pages/table/ReactiveTable";
import { Carousels } from "./pages/ui/Carousels";
import { Gallery } from "./pages/ui/Gallery";
import { Loading } from "./pages/ui/Loading";
import { Messages } from "./pages/ui/Messages";
import { Modals } from "./pages/ui/Modals";
import { Notice } from "./pages/ui/Notice";
import { TabsPage } from "./pages/ui/TabsPage";
import { RichEditor } from "./pages/RichEditor";
import { User } from "./pages/User";
import { Buttons } from "./pages/ui/Buttons";


const {
  Header, Footer, Sider, Content,
} = Layout;

export class Admin extends React.Component {

  /**
   * 组件对应的输入属性
   * 以 `$ + 组件名` 命名
   */
  public $Home: IHomeProps = {
    name: 'home'
  };

  private $HeaderStyle = {
    background: '#fff',
    padding: 0
  };

  private $ContentStyle: CSSProperties | undefined = {
    overflow: "scroll"
  };

  constructor(props: any) {
    super(props);
  }

  /**
   * render 函数
   */
  render(): React.ReactNode {
    return (
      <Layout className="container">
        <Sider>
          <NavLeft/>
        </Sider>
        <Layout>
          <Header style={this.$HeaderStyle}>
            <HeaderContent/>
          </Header>
          <Content style={this.$ContentStyle}>
                {/* 子页面路由 */}
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/carousel" component={Carousels}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/messages" component={Messages}/>
                  <Route path="/ui/notification" component={Notice}/>
                  <Route path="/ui/loadings" component={Loading}/>
                  <Route path="/ui/tabs" component={TabsPage}/>
                  <Route path="/form/login" component={LoginForm}/>
                  <Route path="/form/reg" component={RegisterForm}/>
                  <Route path="/table/basic" component={BasicTable}/>
                  <Route path="/table/high" component={ReactiveTable}/>
                  <Route path="/rich" component={RichEditor}/>
                  <Route path="/charts/line" component={LineChart}/>
                  <Route path="/charts/bar" component={BarChart}/>
                  <Route path="/charts/pie" component={PieChart}/>
                  <Route path="/bikeMap" component={BMap}/>
                  <Route path="/city" component={City}/>
                  <Route path="/user" component={User}/>
                  <Route path="/canvas/high" component={High}/>
                  <Route path="/canvas/animate" component={Animate}/>
                  <Route path="/canvas/basic" component={Basic}/>
                  <Route path="/http/ajax" component={HttpAjax}/>
                  <Route path="/http/fetch" component={HttpFetch}/>
                  <Route path="" component={Home}/>
                </Switch>
          </Content>
          <Footer>
            <FooterContent/>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
