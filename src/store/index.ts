import { combineReducers, createStore, Store } from 'redux'
import countState from './reducers/count-reducer'
import routesState from './reducers/routes-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import booksState from '@/store/reducers/books-reducer'

const rootReducer = combineReducers({
  countState,
  routesState,
  booksState
})
const store = createStore(rootReducer, composeWithDevTools())
export default store
