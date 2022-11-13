import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReduce from './reducers/rootReduce'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const meddleware = [thunk]
const store = createStore(rootReduce, initialState, composeWithDevTools(applyMiddleware(...meddleware)))