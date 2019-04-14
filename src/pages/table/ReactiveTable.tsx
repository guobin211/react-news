import { Badge, Card, message, Modal, Table, Button } from "antd";
import React from "react";
import { Axios } from "../../service/axios";

export class ReactiveTable extends React.Component {
  state = {
    sortOrder: undefined,
    dataSource: undefined
  }
  params = {
    page: 1
  }

  componentDidMount() {
    this.request();
  }

  // 动态获取mock数据
  request = () => {
    Axios.ajax({
      url: '/table/high/list',
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
          dataSource: res.result.list
        })
      }
    })
  }

  handleChange = (pagination: any, filters: any, sorter: any) => {
    console.log("::" + sorter)
    this.setState({
      sortOrder: sorter.order
    })
  }

  // 删除操作
  handleDelete = (item: any) => {
    console.log(item)
    Modal.confirm({
      title: '确认',
      content: '您确认要删除此条数据吗？',
      onOk: () => {
        message.success('删除成功');
        this.request();
      }
    })
  }

  render(): React.ReactNode {
    const columns = [
      {
        title: 'id',
        key: 'id',
        width: 80,
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex: any) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        key: 'state',
        width: 80,
        dataIndex: 'state',
        render(state: string) {
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
        width: 80,
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
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time'
      }
    ]

    const columns3 = [
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
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        sorter: (a: any, b: any) => {
          return a.age - b.age;
        },
        sortOrder: this.state.sortOrder
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state: string) {
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
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex: any) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state: string) {
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
        dataIndex: 'interest',
        render(abc: any) {
          const config = {
            '1': <Badge status="success" text="成功"/>,
            '2': <Badge status="error" text="报错"/>,
            '3': <Badge status="default" text="正常"/>,
            '4': <Badge status="processing" text="进行中"/>,
            '5': <Badge status="warning" text="警告"/>
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '操作',
        render: () => {
          return <Button size="small" onClick={(item: any) => {
            this.handleDelete(item)
          }}>删除</Button>
        }
      }
    ]

    return (
      <div>
        <Card title="头部固定">
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>
        <Card title="表格排序" style={{margin: '10px 0'}}>
          <Table
            bordered={true}
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{margin: '10px 0'}}>
          <Table
            bordered={true}
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}
