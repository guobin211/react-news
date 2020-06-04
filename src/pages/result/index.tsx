import React from 'react'
import { RouteConfig } from '../../routes'

export const Result: RouteConfig[] = [
  {
    path: '/result/success',
    component: React.lazy(() => import('./SuccessPage')),
    desc: '成功页',
    level: 3
  },
  {
    path: '/result/fail',
    component: React.lazy(() => import('./FailPage')),
    desc: '失败页',
    level: 3
  }
]
