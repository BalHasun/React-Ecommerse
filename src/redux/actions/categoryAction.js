import baseUrl from "../../Api/baseURL"
// import useGetData from "../../hooks/useGetData"
import { GET_ALL_CATEGORY, GET_ERROR } from "../types"

export const getAllCategory = (limit) => async (dispatch) => {

    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=${limit}`)
        // const response = useGetData('/api/v1/categories')

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

export const getAllCategoryPage = (page) => async (dispatch) => {

    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=2&page=${page}`)
        // const response = useGetData('/api/v1/categories')

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