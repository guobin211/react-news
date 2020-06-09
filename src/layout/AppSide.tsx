import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import store from '../store'
import { RouteNav } from '@/store/reducers/routes-reducer'

const { SubMenu } = Menu

export interface AppSideProps {
  collapsed: boolean
}

export interface AppSideState {
  routes: RouteNav[]
}

export default class AppSide extends React.Component<AppSideProps, AppSideState> {
  state = {
    routes: store.getState().routesState
  }
  defaultSelectedKeys = ['/admin/dashboard/analysis']
  side: CSSProperties = {
    minHeight: '100vh'
  }

  renderMenu(route: RouteNav) {
    const icon = route.icon ? route.icon : <UserOutlined />
    if (route.routes && route.routes.length > 0) {
      return (
        <SubMenu key={route.path} icon={icon} title={route.desc}>
          {route.routes.map((route, index) => this.renderMenu(route))}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route.path} icon={icon}>
          <Link to={route.path}>{route.desc}</Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed} style={this.side}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.defaultSelectedKeys}>
          {this.state.routes.map((route) => this.renderMenu(route))}
        </Menu>
      </Layout.Sider>
    )
  }
}
