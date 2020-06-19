import React from "react"
import ReactDOM from "react-dom"
import Model, { ModelProps } from "../components/Model"
import { Stack } from "@/utils/Stack"

class ModelService {
  private modelStack: Stack<HTMLDivElement>
  constructor() {
    this.modelStack = new Stack()
  }

  /**
   * 打开model
   * @param config
   */
  open(config: ModelProps) {
    const div = document.createElement("div") as HTMLDivElement
    const top = this.modelStack.getTop()
    if (top) {
      top.style.visibility = "hidden"
    }
    ReactDOM.render(
      <Model
        {...config}
        confirm={() => {
          this.remove(div)
          config.confirm()
          this.restore()
        }}
        cancel={() => {
          this.remove(div)
          config.cancel()
          this.restore()
        }}
      />,
      div
    )
    document.body.appendChild(div)
    this.modelStack.push(div)
  }

  /**
   * 移除model
   * @param div
   */
  private remove(div: HTMLDivElement) {
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    this.modelStack.pop()
  }

  /**
   * 恢复隐藏的model
   */
  private restore() {
    const top = this.modelStack.getTop()
    if (top) {
      top.style.visibility = "visible"
    }
  }
}

const modelService = new ModelService()
export default modelService
