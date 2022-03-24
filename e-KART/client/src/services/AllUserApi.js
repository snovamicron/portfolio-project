import axios from 'axios'


// user sing_up api
export const singup_user = async (payload)=>{
    try {
        const { name, email, password } = payload
        const response = await axios({
            method:'POST',
            url:'/user/singup',
            data:{
                name,
                email,
                password
            }
        })

        return response

    } catch (error) {
        console.log('getting error while calling singup_user api '+error)
        return error
    }
}




// user log_in api
export const login_user = async (payload)=>{
    try {
        const { email, password } = payload
        const response = await axios({
            method:'POST',
            url:'/user/login',
            data:{
                email,
                password
            }
        })

        return response

    } catch (error) {
        console.log('getting error while calling login_user api '+error)
        return error
    }
}


// user fetch_data api
export const fetch_user = async (payload)=>{
    try {
        const { token } = payload
        const response = await axios({
            method:'GET',
            url:'/user/fetchuserdata',
            headers:{
                'token':token
            }
        })
        return response
    } catch (error) {
        console.log('getting error while calling fetch_user api '+error)
        return error
    }
}