import React from "react"

export interface MyErrorBoundaryProps {}

export interface MyErrorBoundaryState {
  hasError: boolean
}

export default class MyErrorBoundary extends React.Component<MyErrorBoundaryProps, MyErrorBoundaryState> {
  constructor(props: MyErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
