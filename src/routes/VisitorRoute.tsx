import React from 'react'

export interface VisitorRouteProps {
}

export interface VisitorRouteState {
}

export default class VisitorRoute extends React.Component<VisitorRouteProps, VisitorRouteState> {
  render() {
    return (
      <div className="VisitorRoute">
        HELLO VisitorRouteProps
      </div>
    )
  }
}
