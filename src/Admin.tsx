import { Layout } from "antd";
import * as React from "react";
import { FooterContent } from "./components/FooterContent";
import { HeaderContent } from "./components/HeaderContent";
import { NavLeft } from "./components/NavLeft";
import { Home, IHomeProps } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { LoginForm } from "./pages/form/Login";
import { Buttons } from "./pages/ui/Buttons";
import { Carousels } from "./pages/ui/Carousels";
import { Gallery } from "./pages/ui/Gallery";
import { Loading } from "./pages/ui/Loading";
import { Messages } from "./pages/ui/Messages";
import { Modals } from "./pages/ui/Modals";
import { Notice } from "./pages/ui/Notice";
import { TabsPage } from "./pages/ui/TabsPage";


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
                    <Content>
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
