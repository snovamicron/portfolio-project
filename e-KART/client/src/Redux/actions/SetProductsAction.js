import * as constants from '../constants'

// API
import { fetch_products } from '../../services/AllProductsApi'

const SetProductsAction = () => async (dispatch)=>{
    console.log('it is comming')
    try {
        const response = await fetch_products()
        dispatch( {
            type: constants.GET_PRODUCTS_SUCCESS,
            payload: response.data
        } )
    } catch (error) {
        dispatch ( {
            type: constants.GET_PRODUCTS_FAIL,
            payload: error.response
        } )
    }
}

export default SetProductsAction