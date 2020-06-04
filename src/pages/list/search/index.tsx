import React from 'react'
import { RouteConfig } from '../../../routes'

export const Search: RouteConfig[] = [
  {
    path: '/list/search/article',
    component: React.lazy(() => import('./ArticlesPage')),
    desc: '文章页',
    level: 4
  },
  {
    path: '/list/search/projects',
    component: React.lazy(() => import('./ProjectsPage')),
    desc: '项目页',
    level: 4
  },
  {
    path: '/list/search/applications',
    component: React.lazy(() => import('./ApplicationsPage')),
    desc: 'APP页',
    level: 4
  }
]
