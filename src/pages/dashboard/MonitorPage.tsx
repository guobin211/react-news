import React from "react"
import Button from "@/components/Button"
import Menu from "@/components/Menu/Menu"
import MenuItem from "@/components/Menu/MenuItem"
import Upload from "@/components/Upload"
import { UploadFile } from "@/components/Upload/upload.component"

export interface MonitorPageProps {}

export interface MonitorPageState {}

export default class MonitorPage extends React.Component<MonitorPageProps, MonitorPageState> {
  files: UploadFile[] = []
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
        <div>
          <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" files={this.files} />
        </div>
      </div>
    )
  }
}
