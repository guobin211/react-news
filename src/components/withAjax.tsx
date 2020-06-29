import React, { FC } from "react"
import { Store, Unsubscribe } from "redux"
import store from "@/store"

/**
 *  with-ajax.tsx redux订阅数据
 * @Date 2020-06-12
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */
function withAjax<T>(WrapComponent: ReactComponent, selectData: SelectFn<T>) {
  class WithSubscription extends React.Component<any, any> {
    static displayName: string
    unsubscribe$: Unsubscribe
    constructor(props: any) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.unsubscribe$ = store.subscribe(this.handleChange)
      this.state = {
        data: selectData()
      }
    }
    componentDidMount() {
      this.unsubscribe$ = store.subscribe(this.handleChange)
    }
    componentWillUnmount() {
      this.unsubscribe$()
    }
    handleChange() {
      this.setState(() => {
        return {
          data: selectData()
        }
      })
    }

    render() {
      return <WrapComponent data={this.state.data} {...this.props} />
    }
  }
  // 包装显示名称以便轻松调试
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrapComponent)})`

  return WithSubscription
}

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

type ReactComponent = typeof React.Component | FC<any>
type SelectFn<T> = () => T

export default withAjax
