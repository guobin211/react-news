# Ant Design And Typescript Project For React 16.x

a template for react

> 2020Hooks重构版

## 启动流程

[![AppStart](https://github.com/guobin211/react-news/blob/react-16/images/start.png)](https://github.com/guobin211/react-news)


## 组织结构

```bash
    
    components      组件
    core            核心
    layout          布局
    pages           业务页面
    routes          主路由页面
    shared          共享服务
    store           全局redux
    styles          样式
    utils           工具

```

## 预览

[![React-Ui](https://github.com/guobin211/react-news/blob/react-16/images/react.png)](https://github.com/guobin211/react-news)

## 注意类型声明

```typescript jsx
// Hooks FC

import React, { useEffect, useState } from 'react'

const MyHooks = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count]) // 仅在 count 更改时更新

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
export default MyHooks


// class component
export interface AdminRouteProps {
  routes: RouteConfig[]
}

export interface AdminRouteState {
  collapsed: boolean
}

class AdminRoute extends React.Component<AdminRouteProps, AdminRouteState> {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout className="ant-pro-basicLayout">
        <AppSide collapsed={this.state.collapsed} />
        <Layout>
          <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content className="site-layout-background">
            <div className="ant-pro-basicLayout-content">
              <GroupRoute routes={this.props.routes} />
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default AdminRoute

```

## Scripts

### `yarn start`
use `.env.local` file to config dev options
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn format` and `yarn lint`

format and lint fix code

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

