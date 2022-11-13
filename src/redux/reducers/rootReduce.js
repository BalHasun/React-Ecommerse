import { combineReducers } from 'redux'
import allCategoryReducer from './allCategoryReducer'

export default combineReducers({
    allcategory: allCategoryReducer
})