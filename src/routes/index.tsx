import React from 'react'
import { Route } from 'react-router-dom'
import {
  DashboardOutlined,
  UserOutlined,
  ExceptionOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  FormOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { Account } from '../pages/account'
import { Dashboard } from '../pages/dashboard'
import { Form } from '../pages/form'
import { List } from '../pages/list'
import { Profile } from '../pages/profile'
import { Result } from '../pages/result'
import { Exception } from '../pages/exception'
import TestRoute from './TestRoute'
import GroupRoute from '../components/GroupRoute'

export function setPrefix(father: string, routes: RouteConfig[]) {
  for (const route of routes) {
    route.path = father + route.path
    if (route.routes && route.routes.length > 0) {
      setPrefix(father, route.routes)
    }
  }
  return routes
}

export function RouteWithSubRoutes(route: RouteConfig) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  )
}

/**
 * 路由配置
 */
export interface RouteConfig {
  // 路径
  path: string
  // 组件
  component: any
  // 路由级别
  level: number
  // 描述
  desc: string
  // 菜单排序
  sort?: number
  // 导航的标题
  title?: string
  // 侧边栏的图标
  icon?: any
  routes?: RouteConfig[]
}

/**
 * 路由配置
 */
export const Routes: RouteConfig[] = [
  {
    path: '/admin',
    component: React.lazy(() => import('./AdminRoute')),
    level: 1,
    desc: '管理平台',
    routes: [
      {
        path: '/admin/dashboard',
        component: GroupRoute,
        level: 2,
        desc: '仪表盘',
        icon: <DashboardOutlined />,
        routes: setPrefix('/admin', Dashboard)
      },
      {
        path: '/admin/form',
        component: GroupRoute,
        level: 2,
        desc: '表单页',
        icon: <FormOutlined />,
        routes: setPrefix('/admin', Form)
      },
      {
        path: '/admin/list',
        component: GroupRoute,
        level: 2,
        desc: '列表页',
        icon: <UnorderedListOutlined />,
        routes: setPrefix('/admin', List)
      },
      {
        path: '/admin/profile',
        component: GroupRoute,
        level: 2,
        desc: '详情页',
        icon: <ProfileOutlined />,
        routes: setPrefix('/admin', Profile)
      },
      {
        path: '/admin/result',
        component: GroupRoute,
        level: 2,
        desc: '结果页',
        icon: <SmileOutlined />,
        routes: setPrefix('/admin', Result)
      },
      {
        path: '/admin/exception',
        component: GroupRoute,
        level: 2,
        desc: '异常页',
        icon: <ExceptionOutlined />,
        routes: setPrefix('/admin', Exception)
      },
      {
        path: '/admin/account',
        component: GroupRoute,
        level: 2,
        desc: '个人页',
        icon: <UserOutlined />,
        routes: setPrefix('/admin', Account)
      }
    ]
  },
  {
    path: '/visitor',
    component: React.lazy(() => import('./VisitorRoute')),
    level: 1,
    desc: '游客平台',
    routes: []
  },
  {
    path: '/login',
    component: React.lazy(() => import('./LoginRoute')),
    level: 1,
    desc: '登录注册',
    routes: []
  },
  { path: '/test', level: 1, desc: '测试', component: TestRoute, routes: [] },
  { path: '*', level: 1, desc: '测试', component: TestRoute, routes: [] }
]
