import React, { ChangeEvent } from "react"

export interface BasicFormPageProps {}

export interface BasicFormPageState {
  value: string
}

export default class BasicFormPage extends React.Component<BasicFormPageProps, BasicFormPageState> {
  state = {
    value: ""
  }

  handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: ev.target.value }, () => {
      console.log("change event")
    })
  }

  render() {
    return (
      <div className="BasicFormPage">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    )
  }
}
