import React from 'react'
import { Link } from 'react-router-dom'
import { Unsubscribe } from 'redux'
import { Button } from 'antd'
import store from '../store'
import { LoginRouteProps } from './LoginRoute'
import { CountingEnum } from '../store/actions/counting.enum'

export interface TestRouteProps {}

export interface TestRouteState {
  counting: number
}

export default class TestRoute extends React.Component<TestRouteProps, TestRouteState> {
  state = {
    counting: store.getState().counting,
  }
  unsubscribe$: Unsubscribe
  constructor(props: LoginRouteProps) {
    super(props)
    this.unsubscribe$ = store.subscribe(() => {
      const { counting } = store.getState()
      this.setState(() => {
        return { counting }
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe$()
  }

  render() {
    return (
      <div className="TestRoute">
        <div>HELLO TestPage {this.state.counting}</div>
        <div>
          <Button type="default" onClick={() => store.dispatch({ type: CountingEnum.Decrement })}>
            Decrement
          </Button>
          <Button type="primary" onClick={() => store.dispatch({ type: CountingEnum.Increment })}>
            Increment
          </Button>
          <Button type="default" onClick={() => store.dispatch({ type: CountingEnum.Reset })}>
            Reset
          </Button>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
      </div>
    )
  }
}
