import { Button, Checkbox, Form, Icon, Input } from "antd";

import React from "react";

interface IPropsLoginForm {
  form: any
}

class LoginForm extends React.Component<IPropsLoginForm> {

  constructor(props: IPropsLoginForm) {
    super(props)
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: string) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.location.href = '/home';
      }
    });
  }

  render(): React.ReactNode {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('用户名', {
            rules: [{required: true, message: '请输入用户名!'}],
          })(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('密码', {
            rules: [{required: true, message: '请输入密码!'}],
          })(
            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                   placeholder="Password"/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住账号</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const WrappedNormalLoginForm = Form.create()(LoginForm);
