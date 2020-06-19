import React from "react"
import { Col, Row } from "antd"

export interface AnalysisPageProps {}

export interface AnalysisPageState {}

export default class AnalysisPage extends React.Component<AnalysisPageProps, AnalysisPageState> {
  render() {
    return (
      <div className="AnalysisPage">
        <Row>
          <Col lg={6} sm={12} xs={24}>
            1
          </Col>
          <Col lg={6} sm={12} xs={24}>
            2
          </Col>
          <Col lg={6} sm={12} xs={24}>
            3
          </Col>
          <Col lg={6} sm={12} xs={24}>
            4
          </Col>
        </Row>
      </div>
    )
  }
}
