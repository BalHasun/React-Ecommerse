
import { useInsertData } from "../../hooks/useInsertData"
import  useGetData  from "../../hooks/useGetData"
import { GET_ERROR, GET_SUB_CATEGORY, CREATE_SUB_CATEGORY } from "../types"


// create sub category
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const res = await useInsertData('/api/v1/subcategories', data)

        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: res,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

//get sub category depend in cat id 
export const getOnCategory = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}/subcategories`)

        dispatch({
            type: GET_SUB_CATEGORY,
            payload: res,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

