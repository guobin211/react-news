import { RouteConfig, Routes } from "@/routes"
import { RoutesAction } from "../actions/routes.action"

export type RouteNav = Pick<RouteConfig, "path" | "desc" | "level" | "title" | "icon" | "routes">

const routes: RouteNav[] = Routes[0].routes || []

export default (state: RouteNav[] = routes, action: { type: RoutesAction; data?: RouteNav[] }) => {
  switch (action.type) {
    case RoutesAction.Update:
      state = action.data || []
      return state
    case RoutesAction.Reset:
      state = routes
      return state
    default:
      return state
  }
}
