import { MouseEventHandler } from "react"

export const stopPropagation: MouseEventHandler = (e) => {
  e.stopPropagation()
}
export const preventDefault: MouseEventHandler = (e) => {
  e.preventDefault()
}
export const stopEvent: MouseEventHandler = (e) => {
  e.stopPropagation()
  e.preventDefault()
}
