import React from "react"
import Loadable from "react-loadable"
import { LoaderConfig } from "@/pages/LoaderConfig"
import { RouteConfig } from "@/routes"

const BasicFormPage = Loadable({
  loader: () => import("./BasicFormPage"),
  ...LoaderConfig
})

const AdvancedFormPage = Loadable({
  loader: () => import("./AdvancedFormPage"),
  ...LoaderConfig
})

const StepsPage = Loadable({
  loader: () => import("./StepFormPage"),
  ...LoaderConfig
})

export const Form: RouteConfig[] = [
  {
    path: "/form/basic",
    component: BasicFormPage,
    desc: "基础表单",
    level: 3
  },
  {
    path: "/form/advanced",
    component: AdvancedFormPage,
    desc: "高级表单",
    level: 3
  },
  {
    path: "/form/step",
    component: StepsPage,
    desc: "分步表单",
    level: 3
  }
]
