import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

export interface AppHeaderProps {
  collapsed: boolean
  toggle: () => void
}

export interface AppHeaderState {}

export default class AppHeader extends React.Component<AppHeaderProps, AppHeaderState> {
  render() {
    return (
      <Layout.Header className="ant-pro-global-header" style={{ padding: 0 }}>
        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.props.toggle,
        })}
      </Layout.Header>
    )
  }
}
