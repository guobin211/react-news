import React from "react"
import { RouteConfig } from "@/routes"
import Loadable from "react-loadable"
import { LoaderConfig } from "@/pages/LoaderConfig"

export const Account: RouteConfig[] = [
  {
    path: "/account/setting",
    desc: "用户设置",
    level: 3,
    component: Loadable({
      loader: () => import("./SettingPage"),
      ...LoaderConfig
    })
  },
  {
    path: "/account/center",
    desc: "用户中心",
    level: 3,
    component: Loadable({
      loader: () => import("./UserCenterPage"),
      ...LoaderConfig
    })
  }
]
