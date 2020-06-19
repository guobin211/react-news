import React from "react"

export interface ProgressBarProps {
  value: number
  showValue: boolean
  unit: number
  mode: string
}

export interface ProgressBarState {}

/**
 * 进度条组件
 */
export default class ProgressBar extends React.Component<ProgressBarProps, ProgressBarState> {
  render() {
    return <div className="ProgressBar">HELLO</div>
  }
}
