import React from 'react'
import { Link } from 'react-router-dom'
import { Unsubscribe } from 'redux'
import { Button } from 'antd'
import store from '../store'
import { LoginRouteProps } from './LoginRoute'
import { CountAction } from '../store/actions/count.action'
import modelService from '../shared/ModelService'

export interface TestRouteProps {}

export interface TestRouteState {
  countState: number
}

export default class TestRoute extends React.Component<TestRouteProps, TestRouteState> {
  state = {
    countState: store.getState().countState,
  }
  unsubscribe$: Unsubscribe
  constructor(props: LoginRouteProps) {
    super(props)
    this.unsubscribe$ = store.subscribe(() => {
      const { countState } = store.getState()
      this.setState(() => {
        return { countState }
      })
    })
  }

  open = () => {
    modelService.open({
      title: 'test',
      body: 'hello test model',
      confirm: () => {
        console.log('confirm')
      },
      cancel: () => {
        console.log('cancel')
      },
    })
  }
  componentWillUnmount() {
    this.unsubscribe$()
  }

  render() {
    return (
      <div className="TestRoute">
        <div>HELLO TestPage {this.state.countState}</div>
        <div>
          <Button type="default" onClick={() => store.dispatch({ type: CountAction.Decrement })}>
            Decrement
          </Button>
          <Button type="primary" onClick={() => store.dispatch({ type: CountAction.Increment })}>
            Increment
          </Button>
          <Button type="default" onClick={() => store.dispatch({ type: CountAction.Reset })}>
            Reset
          </Button>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
        <div>
          <Button type="default" onClick={this.open}>
            Open Dialog
          </Button>
        </div>
      </div>
    )
  }
}
