import { combineReducers, createStore } from 'redux'
import countState from './reducers/count-reducer'
import routesState from './reducers/routes-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  countState,
  routesState,
})
const store = createStore(rootReducer, composeWithDevTools())
export default store
