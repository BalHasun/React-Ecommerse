import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from "../types"


const inital = {
    brand: [],
    loading: true
}


const brandReduce = (state = inital, action) => {
    switch (action.type) {

        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }
        case CREATE_BRAND:
            return {
                brand: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                brand: action.payload,
            }

        default:
            return state;
    }
}
export default brandReduce