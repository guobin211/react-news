import React from "react"
import Button from "@/components/Button"

export interface MonitorPageProps {}

export interface MonitorPageState {}

export default class MonitorPage extends React.Component<MonitorPageProps, MonitorPageState> {
  render() {
    return (
      <div className="bg">
        <div>
          <Button btnType="primary" size="lg">
            Button
          </Button>
        </div>
      </div>
    )
  }
}
