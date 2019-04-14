import { Divider, Form, Icon, Switch, Table, Radio } from "antd";
import { PaginationConfig } from "antd/lib/pagination";
import React from "react";

const FormItem = Form.Item;


interface IETable {
  name: string | undefined
}

const columns = [{
  title: '名字',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: (text: any) => <a href="javascript:;">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'action',
  width: 360,
  render: (text: any, record: any) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
  ),
}];

const data: any[] = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'Jack Ma',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is Jack Ma, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = (record: any) => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {y: 240};
const pagination: PaginationConfig = {position: 'bottom'};

export class ETable extends React.Component<IETable> {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: undefined,
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
  }

  handleToggle = (prop: any) => (enable: any) => {
    this.setState({[prop]: enable});
  }

  handleSizeChange = (e: any) => {
    this.setState({size: e.target.value});
  }

  handleExpandChange = (enable: any) => {
    this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
  }

  handleTitleChange = (enable: any) => {
    this.setState({title: enable ? title : undefined});
  }

  handleHeaderChange = (enable: any) => {
    this.setState({showHeader: enable ? showHeader : false});
  }

  handleFooterChange = (enable: any) => {
    this.setState({footer: enable ? footer : undefined});
  }

  handleRowSelectionChange = (enable: any) => {
    this.setState({rowSelection: enable ? {} : undefined});
  }

  handleScrollChange = (enable: any) => {
    this.setState({scroll: enable ? scroll : undefined});
  }

  handleDataChange = (hasData: any) => {
    this.setState({hasData});
  }

  handlePaginationChange = (e: any) => {
    const {value} = e.target;
    this.setState({
      pagination: value === 'none' ? false : {position: value},
    });
  }

  render(): React.ReactNode {
    const state = this.state;
    return (
      <div>
        <div className="components-table-demo-control-bar">
          <Form layout="inline">
            <FormItem label="边框">
              <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
            </FormItem>
            <FormItem label="loading">
              <Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
            </FormItem>
            <FormItem label="标题">
              <Switch checked={!!state.title} onChange={this.handleTitleChange}/>
            </FormItem>
            <FormItem label="行头">
              <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
            </FormItem>
            <FormItem label="页脚">
              <Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
            </FormItem>
            <FormItem label="折叠">
              <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
            </FormItem>
            <FormItem label="选择">
              <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}/>
            </FormItem>
            <FormItem label="固定">
              <Switch checked={!!state.scroll} onChange={this.handleScrollChange}/>
            </FormItem>
            <FormItem label="数据">
              <Switch checked={!!state.hasData} onChange={this.handleDataChange}/>
            </FormItem>
            <FormItem label="样式">
              <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </FormItem>
            <FormItem label="位置">
              <Radio.Group
                value={state.pagination ? state.pagination.position : 'none'}
                onChange={this.handlePaginationChange}
              >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="both">Both</Radio.Button>
                <Radio.Button value="none">None</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>
        <Table columns={columns}
               bordered={this.state.bordered}
               size={this.state.size}
               title={this.state.title}
               footer={this.state.footer}
               expandedRowRender={this.state.expandedRowRender}
               pagination={this.state.pagination}
               loading={this.state.loading}
               dataSource={state.hasData ? data : undefined}/>
      </div>
    );
  }
}
