import { Layout } from "antd";
import * as React from "react";
import { FooterContent } from "./components/FooterContent";
import { HeaderContent } from "./components/HeaderContent";
import { NavLeft } from "./components/NavLeft";
import { IHomeProps } from "./pages/Home";

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
                        admin page route
                        {this.props.children}
                    </Content>
                    <Footer>
                        <FooterContent/>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
