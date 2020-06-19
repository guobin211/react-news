import React from "react"
import { RouteConfig } from "@/routes"

export const Account: RouteConfig[] = [
  {
    path: "/account/setting",
    desc: "用户设置",
    level: 3,
    component: React.lazy(() => import("./SettingPage"))
  },
  {
    path: "/account/center",
    desc: "用户中心",
    level: 3,
    component: React.lazy(() => import("./UserCenterPage"))
  }
]
