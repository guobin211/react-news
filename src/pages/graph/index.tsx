import React from 'react'
import { RouteConfig } from '@/routes'

const Graph: RouteConfig[] = [
  {
    path: '/graph/g6',
    component: React.lazy(() => import('./AntGraph')),
    desc: '流程图',
    level: 3
  }
]
export default Graph
