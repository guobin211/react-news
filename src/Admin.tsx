import { Col, Row } from "antd";
import * as React from "react";
import { NavLeft } from "./components/NavLeft";

export class Admin extends React.Component{
    render(): React.ReactNode {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                   <NavLeft/>
                </Col>
                <Col span={20} className="main">
                 ll
                </Col>
            </Row>
        );
    }
}
