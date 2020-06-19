import React from "react"
import { RouteConfig } from "@/routes"

export const Analysis = React.lazy(() => import("./AnalysisPage"))
export const Monitor = React.lazy(() => import("./MonitorPage"))
export const Workplace = React.lazy(() => import("./WorkplacePage"))

export const Dashboard: RouteConfig[] = [
  { path: "/dashboard/analysis", component: Analysis, level: 3, desc: "分析页" },
  { path: "/dashboard/monitor", component: Monitor, level: 3, desc: "监控页" },
  { path: "/dashboard/workplace", component: Workplace, level: 3, desc: "工作台" }
]
