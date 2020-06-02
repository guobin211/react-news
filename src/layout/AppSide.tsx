import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import store from '../store'
import { RouteNav } from '../store/reducers/routes-reducer'

const { SubMenu } = Menu

export interface AppSideProps {
  collapsed: boolean
}

export interface AppSideState {
  routes: RouteNav[]
}

export default class AppSide extends React.Component<AppSideProps, AppSideState> {
  state = {
    routes: store.getState().routesState,
  }
  defaultSelectedKeys = ['/admin/dashboard/analysis0']

  renderMenu(route: RouteNav, key: number) {
    if (route.routes && route.routes.length > 0) {
      return (
        <SubMenu key={route.path + key} icon={<UserOutlined />} title={route.desc}>
          {route.routes.map((route, index) => this.renderMenu(route, index))}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route.path + key} icon={<UserOutlined />}>
          <Link to={route.path}>{route.desc}</Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.defaultSelectedKeys}>
          {this.state.routes.map((route, index) => this.renderMenu(route, index))}
        </Menu>
      </Layout.Sider>
    )
  }
}
