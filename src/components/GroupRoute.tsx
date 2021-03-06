import React from "react"
import { Switch, Redirect } from "react-router-dom"
import { RouteConfig, RouteWithSubRoutes } from "../routes"

export interface GroupRouteProps {
  routes: RouteConfig[]
}
export default class GroupRoute extends React.Component<GroupRouteProps> {
  render() {
    return (
      <Switch>
        {this.props.routes?.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Redirect from="/*" to={this.props.routes[0].path} />
      </Switch>
    )
  }
}
