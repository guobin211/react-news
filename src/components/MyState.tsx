/**
 *  StateTest.tsx
 * @Date 2020-06-17
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */
import React from "react"
import store from "@/store"
import { Unsubscribe } from "redux"
import modelService from "@/shared/ModelService"
import { Button } from "antd"
import { CountAction } from "@/store/actions/count.action"
import { Link } from "react-router-dom"
import HOC from "@/components/HOC"
import MyHooks from "@/components/MyHooks"
import ReduxHOC from "@/components/ReduxHOC"

export interface StateTestProps {}

export interface StateTestState {
  countState: number
}

class MyState extends React.Component<StateTestProps, StateTestState> {
  state = {
    countState: store.getState().countState
  }
  unsubscribe$: Unsubscribe
  constructor(props: any) {
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
      title: "test",
      body: (
        <Button type="default" onClick={() => store.dispatch({ type: CountAction.Decrement })}>
          Decrement
        </Button>
      ),
      confirm: () => {
        console.log("confirm")
      },
      cancel: () => {
        console.log("cancel")
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribe$()
  }

  render() {
    return (
      <React.Fragment>
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
        <div>
          <HOC />
          <MyHooks />
          <ReduxHOC />
        </div>
      </React.Fragment>
    )
  }
}

export default MyState
