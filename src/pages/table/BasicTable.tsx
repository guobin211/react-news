import { Button, Card, message, Modal, Table } from "antd";
import { TableRowSelection } from "antd/lib/table";
import React from "react";
import { Axios } from "../../service/axios";
import { Tools } from "../../utils/Tools";

export class BasicTable extends React.Component {

  state = {
    dataSource2: [],
    dataSource: undefined,
    pagination: undefined,
    selectedRowKeys: undefined,
    selectedRows: undefined,
  }

  params = {
    page: 1
  }

  // 多选执行删除动作
  handleDelete = (() => {
    const rows = this.state.selectedRows;
    const ids: any[] = [];
    // @ts-ignore
    rows.map((item) => {
      ids.push(item.id)
    })
    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功');
        this.request();
      }
    })
  })

  componentDidMount() {
    const data = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00',
        key: undefined
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00',
        key: undefined
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00',
        key: undefined
      },
    ]
    data.map((item, index) => {
      // @ts-ignore
      item.key = index;
    })
    this.setState({
      dataSource: data
    })
    this.request();
  }

  // 动态获取mock数据
  request = () => {
    const that = this;
    Axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res: { code: number, result: { list: any[] } }) => {
      if (res.code === 0) {
        res.result.list.map((item, index) => {
          item.key = index;
        })
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Tools.pagination(res, (current: any) => {
            that.params.page = current;
            this.request();
          })
        })
      }
    })
  }

  onRowClick = (record: any, index: any) => {
    const selectKey = [index];
    Modal.info({
      title: '信息',
      content: `用户名：${record.userName},用户爱好：${record.interest}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  render(): React.ReactNode {
    const columns = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex: any) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state: any) {
          const config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(abc: any) {
          const config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection: TableRowSelection<any> = {
      type: 'radio',
      selectedRowKeys
    }
    const rowCheckSelection: TableRowSelection<any> = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys: any, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{margin: '10px 0'}}>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{margin: '10px 0'}}>
          <Table
            bordered={true}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{margin: '10px 0'}}>
          <div style={{marginBottom: 10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered={true}
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-表格分页" style={{margin: '10px 0'}}>
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    );
  }
}
