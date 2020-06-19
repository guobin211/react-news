import { CountAction } from "../actions/count.action"

const value = 0

export default (state = value, action: { type: CountAction }) => {
  switch (action.type) {
    case CountAction.Decrement:
      return state - 1
    case CountAction.Increment:
      return state + 1
    case CountAction.Reset:
      return value
    default:
      return state
  }
}
