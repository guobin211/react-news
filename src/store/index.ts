import { combineReducers, createStore } from 'redux'
import counting from './reducers/counting'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counting,
})

const store = createStore(rootReducer, composeWithDevTools())
export default store
