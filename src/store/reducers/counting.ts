import { CountingEnum } from '../actions/counting.enum'

const value = 0

export default (state = value, action: { type: CountingEnum }) => {
  switch (action.type) {
    case CountingEnum.Decrement:
      return state - 1
    case CountingEnum.Increment:
      return state + 1
    case CountingEnum.Reset:
      return value
    default:
      return state
  }
}
