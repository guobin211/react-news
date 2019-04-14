import { Button, Card, Modal, Table, message } from "antd";
import React from "react";
import { Axios } from "../../service/axios";
import { Tools } from "../../utils/Tools";
import { FilterForm } from "./FilterForm";
import { OpenCityForm } from "./OpenCityForm";

export class City extends React.Component {
  state = {
    list: [],
    isShowOpenCity: false,
    pagination: undefined,
  }
  params = {
    page: 1
  }
  private cityForm: any;

  componentDidMount() {
    this.requestList();
  }

  // 默认请求我们的接口数据
  requestList = () => {
    const _this = this;
    Axios.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res: any) => {
      const list = res.result.item_list.map((item: any, index: any) => {
        item.key = index;
        return item;
      });
      this.setState({
        list,
        pagination: Tools.pagination(res, (current: any) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }

  // 开通城市
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true
    })
  }
  // 城市开通提交
  handleSubmit = () => {
    const cityInfo = this.cityForm.props.form.getFieldsValue();
    console.log(cityInfo);
    Axios.ajax({
      url: '/city/open',
      data: {
        params: cityInfo
      }
    }).then((res: any) => {
      if (res.code === '0') {
        message.success('开通成功');
        this.setState({
          isShowOpenCity: false
        })
        this.requestList();
      }
    })
  }

  render(): React.ReactNode {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode: any) {
          return mode === 1 ? '停车点' : '禁停区';
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode: any) {
          return op_mode === 1 ? '自营' : '加盟';
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr: any[]) {
          return arr.map((item: any) => {
            return item.user_name;
          }).join(',');
        }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        render: Tools.formatDate
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]
    return (
      <div>
        <Card>
          <FilterForm/>
        </Card>
        <Card style={{marginTop: 10}}>
          <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <div className="content">
          <Table
            bordered={true}
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            })
          }}
          onOk={this.handleSubmit}
        >
          <OpenCityForm wrappedComponentRef={(inst: any) => {
            this.cityForm = inst;
          }}/>
        </Modal>
      </div>
    );
  }
}
