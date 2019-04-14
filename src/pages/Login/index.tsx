import React from "react";
import "./index.scss";
import { WrappedNormalLoginForm } from "./LoginForm";

export class Login extends React.Component {
  state = {
    errorMsg: ''
  };

  constructor(props: any) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div className="login-page">
        <div className="login-header">
          <div className="logo">
            <img src="/resource/assets/logo-ant.svg" alt="React后台管理系统"/>
            React全家桶 + AntD + Typescript 后台系统
          </div>
        </div>
        <div className="login-content-wrap">
          <div className="login-content">
            <div className="word">共享出行 <br/>引领城市新经济</div>
            <div className="login-box">
              <div className="title">Hello React</div>
              <WrappedNormalLoginForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
