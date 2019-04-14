import React from 'react'
import { Form, Input, Select, Radio, DatePicker } from 'antd'
import Moment from 'moment'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

interface IProps {
  userInfo: any;
  form: any;
  type: any;
}

class UserList extends React.Component<IProps> {

  getState = (state: string) => {
    return {
      '1': '咸鱼一条',
      '2': '风华浪子',
      '3': '北大才子一枚',
      '4': '百度FE',
      '5': '创业者'
    }[state]
  }

  render(): React.ReactNode {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 16}
    };
    const userInfo = this.props.userInfo || {};
    const type = this.props.type;
    return (
      <Form layout="horizontal">
        <FormItem label="姓名" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.username :
              getFieldDecorator('user_name', {
                initialValue: userInfo.username
              })(
                <Input type="text" placeholder="请输入姓名"/>
              )
          }
        </FormItem>
        <FormItem label="性别" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.sex === 1 ? '男' : '女' :
              getFieldDecorator('sex', {
                initialValue: userInfo.sex
              })(
                <RadioGroup>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </RadioGroup>
              )}
        </FormItem>
        <FormItem label="状态" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? this.getState(userInfo.state) :
              getFieldDecorator('state', {
                initialValue: userInfo.state
              })(
                <Select>
                  <Option value={1}>咸鱼一条</Option>
                  <Option value={2}>风华浪子</Option>
                  <Option value={3}>北大才子一枚</Option>
                  <Option value={4}>百度FE</Option>
                  <Option value={5}>创业者</Option>
                </Select>
              )}
        </FormItem>
        <FormItem label="生日" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.birthday :
              getFieldDecorator('birthday', {
                initialValue: Moment(userInfo.birthday)
              })(
                <DatePicker/>
              )}
        </FormItem>
        <FormItem label="联系地址" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.address :
              getFieldDecorator('address', {
                initialValue: userInfo.address
              })(
                <Input.TextArea rows={3} placeholder="请输入联系地址"/>
              )}
        </FormItem>
      </Form>
    );
  }
}

export const UserForm = Form.create({})(UserList);
