import useGetData from "../../hooks/useGetData"
import { GET_ALL_CATEGORY, GET_ERROR } from "../types"

export const getAllCategory = () => async (dispatch) => {

    try {
        // const res = await baseUrl.get('/api/v1/categories')
        const response = useGetData('/api/v1/categories')
        
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'ERROR' + e
        })
    }
}