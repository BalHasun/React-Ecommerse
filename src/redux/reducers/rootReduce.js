import { combineReducers } from 'redux'
import allCategoryReducer from './categoryReduce'

export default combineReducers({
    allcategory: allCategoryReducer
})