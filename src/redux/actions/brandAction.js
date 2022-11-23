import baseUrl from "../../Api/baseURL"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND } from "../types"

// get all category from dataBase with specifited item limited
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const res = await baseUrl.get(`/api/v1/brands?limit=${limit}`)

        dispatch({
            type: GET_ALL_BRAND,
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
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const res = await baseUrl.get(`/api/v1/brands?limit=6&page=${page}`)

        dispatch({
            type: GET_ALL_BRAND,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

export const createBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage('/api/v1/brands', formData)

        dispatch({
            type: CREATE_BRAND,
            payload: res
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}

