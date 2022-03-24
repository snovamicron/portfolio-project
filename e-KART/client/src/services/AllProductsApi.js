import axios from 'axios'


// api call fro fetching all products data from db 
export const fetch_products = async ()=>{
    try {
        const response = await axios({
            method:'GET',
            url:'/porducts/fetchproductsdata'
        })
        return response
    } catch (error) {
        console.log('getting error while calling fetch_products api '+error)
        return error.response
    }
}

