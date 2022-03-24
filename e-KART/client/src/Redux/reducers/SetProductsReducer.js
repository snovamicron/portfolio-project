import * as constants from '../constants'


const initialState = {
    products: []
}

export default function SetProducts(state = initialState, action) {
    switch (action.type) {
        case constants.GET_PRODUCTS_SUCCESS:
            let { products } = action.payload
            state = {
                ...state,
                products
            }
            return state

        case constants.GET_PRODUCTS_FAIL:
            return state

        default:
            return state
    }
}