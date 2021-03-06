import React from "react"
import { RouteConfig } from "@/routes"

export const Exception: RouteConfig[] = [
  {
    path: "/exception/access",
    component: React.lazy(() => import("./AccessPage")),
    desc: "403",
    level: 3
  },
  {
    path: "/exception/error",
    component: React.lazy(() => import("./ServerErrorPage")),
    desc: "500",
    level: 3
  }
]
