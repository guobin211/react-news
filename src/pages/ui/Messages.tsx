import { Button, Card, message } from "antd";
import * as React from "react";

export class Messages extends React.Component {

  showMessage = (type: string) => {
    message[type]("恭喜你，React组件升级成功");
  }

  render(): React.ReactNode {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
        </Card>
      </div>
    );
  }
}
