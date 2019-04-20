import React from "react";
import { Button, Card, Radio } from "antd";
import "./ui.scss";
import { store } from "../../redux/store";

interface IButtonsState {
  loading: boolean;
  size: "default" | "small" | "large" | undefined
}

export class Buttons extends React.Component<any, IButtonsState> {

  public state: IButtonsState = {
    loading: true,
    size: "default"
  };

  constructor(props: any) {
    super(props);

  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  handleChange = (e: any) => {
    this.setState({
      size: e.target.value
    })
  };

  handleAdd = (e: any) => {
    store.dispatch({type: 'INCREMENT'});
  };

  handleDecrement = (e: any) => {
    store.dispatch({type: 'DECREMENT'});
  };

  render(): React.ReactNode {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary" onClick={this.handleAdd}>增加</Button>
          <Button onClick={this.handleDecrement}>减少</Button>
          <Button type="dashed">0</Button>
          <Button type="danger">Antd</Button>
          <Button disabled={true}>Antd</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"/>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}/>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}/>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" style={{marginBottom: 10}}>
          <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Button</Button>
          <Button size={this.state.size}>Button</Button>
          <Button type="dashed" size={this.state.size}>Button</Button>
          <Button type="danger" size={this.state.size}>Button</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
