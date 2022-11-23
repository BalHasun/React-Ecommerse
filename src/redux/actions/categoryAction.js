import baseUrl from "../../Api/baseURL"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from "../types"

// get all category from dataBase with specifited item limited
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=${limit}`)

        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

// get all gategory from database with specifited page number to paganition
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=6&page=${page}`)

        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

export const createGategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage('/api/v1/categories', formData)

        dispatch({
            type: CREATE_CATEGORY,
            payload: res
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

