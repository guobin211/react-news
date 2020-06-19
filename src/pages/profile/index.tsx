import React from "react"
import { RouteConfig } from "@/routes"

export const Profile: RouteConfig[] = [
  {
    path: "/profile/basic",
    component: React.lazy(() => import("./BasicDetailPage")),
    desc: "基本信息",
    level: 3
  },
  {
    path: "/profile/advance",
    component: React.lazy(() => import("./AdvancedDetailPage")),
    desc: "高级详情",
    level: 3
  }
]
