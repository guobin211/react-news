/**
 * reducers
 * @author guobin201314@gmail.com on 2019-03-12
 */
import { createStore } from 'redux';
import { counter } from "./reducers";

export const store = createStore(counter);

export function storeToProps(state: any) {
  return {
    init_data: state
  }
}

export function dispatchToProps(dispatch: any) {
  return {}
}
