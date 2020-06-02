import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { RouteConfig, RouteWithSubRoutes } from '../routes'

export interface GroupRouteProps {
  routes: RouteConfig[]
}
export default class GroupRoute extends React.Component<GroupRouteProps> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.props.routes?.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}
