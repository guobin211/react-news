import React from "react"
import Loadable from "react-loadable"
import { RouteConfig } from "@/routes"
import { LoaderConfig } from "@/pages/LoaderConfig"

export const Analysis = Loadable({
  loader: () => import("./AnalysisPage"),
  ...LoaderConfig
})

export const Monitor = Loadable({
  loader: () => import("./MonitorPage"),
  ...LoaderConfig
})

export const Workplace = Loadable({
  loader: () => import("./WorkplacePage"),
  ...LoaderConfig
})

export const Dashboard: RouteConfig[] = [
  { path: "/dashboard/analysis", component: Analysis, level: 3, desc: "分析页" },
  { path: "/dashboard/monitor", component: Monitor, level: 3, desc: "监控页" },
  { path: "/dashboard/workplace", component: Workplace, level: 3, desc: "工作台" }
]
