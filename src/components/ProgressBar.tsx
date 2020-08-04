import React from "react"

export interface ProgressBarProps {
  persent: number
  storkeHeight: number
  showText: boolean
  styles?: React.CSSProperties
}

export interface ProgressBarState {
  persent: number
  storkeHeight: number
  showText: boolean
  styles?: React.CSSProperties
}

/**
 * 进度条组件
 */
export default class ProgressBar extends React.Component<ProgressBarProps, ProgressBarState> {
  constructor(props: ProgressBarProps) {
    super(props)
    this.setState(() => {
      return {
        persent: props.persent || 0,
        storkeHeight: props.storkeHeight || 0,
        showText: props.showText || false,
        styles: props.styles
      }
    })
  }

  public shouldComponentUpdate(
    nextProps: Readonly<ProgressBarProps>,
    nextState: Readonly<ProgressBarState>,
    nextContext: any
  ): boolean {
    let shouldChange = false
    for (const [key, val] of Object.entries(nextProps)) {
      if (val !== this.props[key as keyof ProgressBarState]) {
        shouldChange = true
        this.setState(() => {
          return {
            persent: nextProps.persent || 0,
            storkeHeight: nextProps.storkeHeight || 0,
            showText: nextProps.showText || false,
            styles: nextProps.styles
          }
        })
        break
      }
    }
    return shouldChange
  }

  render() {
    return (
      <div className="viking-progress-bar" style={this.state.styles}>
        <div className="viking-progress-bar-outer" style={{ height: `${this.state.persent}px` }}>
          <div className={`viking-progress-bar-inner`} style={{ width: `${this.state.persent}%` }}>
            {this.state.showText && <span className="inner-text">{`${this.state.persent}%`}</span>}
          </div>
        </div>
      </div>
    )
  }
}
