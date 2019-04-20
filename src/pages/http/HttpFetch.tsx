import { Card } from "antd";
import React from "react";

export class HttpFetch extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div className={"inline-page"}>
        <Card>
          <h1>上传文件进度</h1>
        </Card>
      </div>
    );
  }
}
