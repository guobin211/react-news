import { Layout } from "antd";
import * as React from "react";
import { FooterContent } from "./components/FooterContent";
import { HeaderContent } from "./components/HeaderContent";
import { NavLeft } from "./components/NavLeft";

const {
    Header, Footer, Sider, Content,
} = Layout;

export class Admin extends React.Component {
    render(): React.ReactNode {
        return (
            <Layout className="container">
                <Sider>
                    <NavLeft/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <HeaderContent/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>
                        <FooterContent/>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
