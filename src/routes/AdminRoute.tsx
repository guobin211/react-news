import React, { CSSProperties } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { Layout } from 'antd'
import './AdminRoute.css'
import AppSide from '../layout/AppSide'
import AppHeader from '../layout/AppHeader'

const {Content} = Layout
const FormPage = React.lazy(() => import('../pages/FormPage'))

export interface AdminRouteProps {
}

export interface AdminRouteState {
  collapsed: boolean
}

export default class AdminRoute extends React.Component<AdminRouteProps, AdminRouteState> {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  contentStyle: CSSProperties = {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280
  }

  render() {
    return (
      <Layout>
        <AppSide collapsed={this.state.collapsed}/>
        <Layout className="site-layout">
          <AppHeader collapsed={this.state.collapsed} toggle={this.toggle}/>
          <Content
            className="site-layout-background"
            style={this.contentStyle}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/admin/form">
                  <FormPage/>
                </Route>
              </Switch>
            </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
