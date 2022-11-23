
import { useInsertData } from "../../hooks/useInsertData"
import { GET_ERROR, CREATE_SUB_CATEGORY } from "../types"


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
