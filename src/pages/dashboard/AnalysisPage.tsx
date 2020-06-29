import React from "react"
import { Col, Row, Card } from "antd"

const { Meta } = Card

export interface AnalysisPageProps {}

export interface AnalysisPageState {}

export default class AnalysisPage extends React.Component<AnalysisPageProps, AnalysisPageState> {
  render() {
    return (
      <div className="bg" style={{ padding: "20px" }}>
        <Row>
          <Col lg={6} sm={12} xs={24}>
            <Card
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  draggable={"false"}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  draggable={"false"}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  draggable={"false"}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card
              hoverable
              style={{ width: "80%" }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  draggable={"false"}
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
