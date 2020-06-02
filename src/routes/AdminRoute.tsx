import React, { CSSProperties } from 'react'
import { Layout } from 'antd'
import './styles/AdminRoute.css'
import AppSide from '../layout/AppSide'
import AppHeader from '../layout/AppHeader'
import { RouteConfig } from './index'
import GroupRoute from '../components/GroupRoute'

const { Content } = Layout

export interface AdminRouteProps {
  routes: RouteConfig[]
}

export interface AdminRouteState {
  collapsed: boolean
}

export default class AdminRoute extends React.Component<AdminRouteProps, AdminRouteState> {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout>
        <AppSide collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content className="site-layout-background">
            <GroupRoute routes={this.props.routes} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
