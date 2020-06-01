import React from 'react'
import { Button } from 'antd'
import store from '../store'
import { CountingEnum } from '../store/actions/counting.enum'
import { Unsubscribe } from 'redux'

export interface LoginRouteProps {}

export interface LoginRouteState {
  counting: number
}

export default class LoginRoute extends React.Component<LoginRouteProps, LoginRouteState> {
  state = {
    counting: store.getState().counting,
  }
  store$: Unsubscribe
  constructor(props: LoginRouteProps) {
    super(props)
    this.store$ = store.subscribe(() => {
      const { counting } = store.getState()
      this.setState(() => {
        return { counting }
      })
    })
  }
  componentWillUnmount() {
    this.store$()
  }

  render() {
    return (
      <div className="LoginRoute">
        <div>HELLO LoginRouteState</div>
        <p>count: {this.state.counting}</p>
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
    )
  }
}
