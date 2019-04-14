/**
 * action
 * @author guobin201314@gmail.com on 2019-03-12
 */

export type ActionsTypes = 'INCREMENT' | 'DECREMENT';

export interface IActions {
  type: 'INCREMENT' | 'DECREMENT'
}

export const init_data = 0;

export function counter(state = init_data, action: IActions) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
