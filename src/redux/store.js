import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReduce from './reducers/rootReduce'
import { composeWithDevTools } from 'redux-devtools-extension'
const initailState = {}

const meddleware = [thunk]

const store = createStore(rootReduce, initailState, composeWithDevTools(applyMiddleware(...meddleware)))

export default store