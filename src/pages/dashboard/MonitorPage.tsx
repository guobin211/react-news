import React from "react"
import Button from "@/components/Button"
import Menu from "@/components/Menu/Menu"
import MenuItem from "@/components/Menu/MenuItem"

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
        <div>
          <Menu defaultIndex={"1"}>
            <MenuItem>11</MenuItem>
            <MenuItem>22</MenuItem>
            <MenuItem>33</MenuItem>
            <MenuItem>44</MenuItem>
          </Menu>
        </div>
      </div>
    )
  }
}
