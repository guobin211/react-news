import React from 'react'
import { RouteConfig } from '../../routes'
import { Search } from './search'
import GroupRoute from '../../components/GroupRoute'

export const List: RouteConfig[] = [
  {
    path: '/list/search',
    component: GroupRoute,
    desc: '搜索页',
    level: 3,
    routes: Search
  },
  {
    path: '/list/basic',
    component: React.lazy(() => import('./BasicListPage')),
    desc: '基础列表',
    level: 3
  },
  {
    path: '/list/card',
    component: React.lazy(() => import('./CardListPage')),
    desc: '卡片页',
    level: 3
  },
  {
    path: '/list/table',
    component: React.lazy(() => import('./TableListPage')),
    desc: '表格页',
    level: 3
  }
]
