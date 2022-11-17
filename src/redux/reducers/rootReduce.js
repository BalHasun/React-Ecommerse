import { combineReducers } from 'redux'
import allCategoryReducer from './categoryReduce'
import brandReducer from './brandReduce'
import subcategory from './SubCategoryReduce'


export default combineReducers({
    allcategory: allCategoryReducer,
    allbrand: brandReducer,
    subcategory: subcategory
})