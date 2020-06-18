import React from 'react'
import MyState from '@/components/MyState'
import SvgRef from '@/components/SvgRef'
import WithZoom from '@/components/WithZoom'

export interface TestRouteProps {}

export interface TestRouteState {
  width: number
  height: number
}

export default class TestRoute extends React.Component<TestRouteProps, TestRouteState> {
  state = {
    width: 200,
    height: 200
  }

  render() {
    return (
      <div className="TestRoute">
        <SvgRef width={this.state.width} height={this.state.height} />
      </div>
    )
  }
}
