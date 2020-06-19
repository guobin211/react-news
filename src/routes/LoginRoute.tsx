import React from "react"

export interface LoginRouteProps {}

export interface LoginRouteState {
  counting: number
}

export default class LoginRoute extends React.Component<LoginRouteProps, LoginRouteState> {
  render() {
    return <div className="LoginRoute">LoginRoute</div>
  }
}
