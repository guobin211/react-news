import React from 'react'
import { RouteConfig } from '@/routes'

export const Form: RouteConfig[] = [
  {
    path: '/form/basic',
    component: React.lazy(() => import('./BasicFormPage')),
    desc: '基础表单',
    level: 3
  },
  {
    path: '/form/advanced',
    component: React.lazy(() => import('./AdvancedFormPage')),
    desc: '高级表单',
    level: 3
  },
  {
    path: '/form/step',
    component: React.lazy(() => import('./StepFormPage')),
    desc: '分步表单',
    level: 3
  }
]
