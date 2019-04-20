/**
 * HttpAjax
 * @author guobin201314@gmail.com on 2019-04-15
 */

import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Http } from './HttpClient';

export class HttpAjax extends React.Component<any, any> {

  public state = {
    get: '',
    post: '',
    delete: '',
    put: '',
  }

  constructor(props: any) {
    super(props)
  }

  handleHttp: (s: string)=>void = (s: string) => {
    switch (s) {
      case 'get':
        Http.get('http://localhost:4000/users', { name: 'jack'}).then( (res: any) => {
          this.setState({
            get: JSON.stringify(res)
          });
        })
        break;
      case 'post':
        Http.post('http://localhost:4000/users', { name: 'jack'}).then( (res: any) => {
          this.setState({
            post: JSON.stringify(res)
          });
        })
        break;
      case 'delete':
        Http.delete('http://localhost:4000/users', { name: 'jack'}).then( (res: any) => {
          this.setState({
            delete: JSON.stringify(res)
          });
        })
        break;
      case 'put':
        Http.put('http://localhost:4000/users', { name: 'jack'}).then( (res: any) => {
          this.setState({
            put: JSON.stringify(res)
          });
        })
        break;
      default:
        Http.get('http://localhost:4000/users', { name: 'jack'}).then( (res: any) => {
          this.setState({
            get: JSON.stringify(res)
          });
        })
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <div className={"inline-page"}>
        <Row>
          <Col span={6} order={4}>
            <Button type="primary" onClick={() => this.handleHttp('get')}>get</Button>
            <Card>
              <h1>{this.state.get}</h1>
            </Card>
          </Col>
          <Col span={6} order={3}>
            <Button type="primary" onClick={() => this.handleHttp('post')}>post</Button>
            <Card>
              <h1>{this.state.post}</h1>
            </Card>
          </Col>
          <Col span={6} order={2}>
            <Button type="primary" onClick={() => this.handleHttp('delete')}>delete</Button>
            <Card>
              <h1>{this.state.delete}</h1>
            </Card>
          </Col>
          <Col span={6} order={1}>
            <Button type="primary" onClick={() => this.handleHttp('put')}>put</Button>
            <Card>
              <h1>{this.state.put}</h1>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
