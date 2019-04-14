import { Card, Form, Input, Button, Modal } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { ETable } from "../../components/ETable";
import { Axios } from "../../service/axios";
import { Tools } from "../../utils/Tools";
import { UserForm } from "./UserForm";

export class User extends React.Component {
  state = {
    list: [],
    selectedItem: undefined,
    title: undefined,
    isVisible: undefined,
    pagination: undefined,
    userInfo: undefined,
    type: undefined,
    selectedRowKeys: undefined,
  }

  params = {
    page: 1
  }

  private userForm: any;

  requestList = () => {
    Axios.ajax({
      url: '/table/list1',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res: any) => {
      const _this = this;
      this.setState({
        list: res.result.list.map((item: any, index: any) => {
          item.key = index
          return item;
        }),
        pagination: Tools.pagination(res, (current: any) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }

  componentDidMount() {
    this.requestList();
  }

  // 操作员工
  handleOperator = (type: any) => {
    const item = this.state.selectedItem;
    if (type === 'create') {
      this.setState({
        title: '创建员工',
        isVisible: true,
        type
      })
    } else if (type === "edit" || type === 'detail') {
      if (!item) {
        Modal.info({
          title: '信息',
          content: '请选择一个用户'
        })
        return;
      }
      this.setState({
        title: type === 'edit' ? '编辑用户' : '查看详情',
        isVisible: true,
        userInfo: item,
        type
      })
    } else if (type === "delete") {
      if (!item) {
        Modal.info({
          title: '信息',
          content: '请选择一个用户'
        })
        return;
      }
    }
  }

  handleSubmit = () => {
    const type = this.state.type;
    const data = this.userForm.props.form.getFieldsValue();
    Axios.ajax({
      url: type === 'create' ? '/user/add' : '/user/edit',
      data: {
        params: {
          ...data
        }
      }
    }).then((res: any) => {
      if (res.code === 0 || res.code === '0') {
        this.setState({
          isVisible: false
        })
        this.requestList();
      }
    })
  }

  render(): React.ReactNode {

    return (
      <div>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登 录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card style={{marginTop: 10}}>
          <Button type="primary" icon="plus" onClick={() => this.handleOperator('create')}>创建员工</Button>
          <Button icon="edit" onClick={() => this.handleOperator('edit')}>编辑员工</Button>
          <Button onClick={() => this.handleOperator('detail')}>员工详情</Button>
          <Button type="danger" icon="delete" onClick={() => this.handleOperator('delete')}>删除员工</Button>
        </Card>
        <div className="content-wrap">
          <ETable name="table"/>
        </div>
        <Modal
          title={this.state.title}
          visible={this.state.isVisible}
          onOk={this.handleSubmit}
          width={800}
          onCancel={() => {
            this.userForm.props.form.resetFields();
            this.setState({
              isVisible: false,
              userInfo: ''
            })
          }}
        >
          <UserForm userInfo={this.state.userInfo} type={this.state.type}
                    wrappedComponentRef={(inst: any) => this.userForm = inst}/>
        </Modal>
      </div>
    );
  }
}
