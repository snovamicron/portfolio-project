

import axios from 'axios'

// API call for new suer sing up

export const sing_up = async (data)=>{
    const { payload } = data
    try {
        const response = await axios({
            method:'POST',
            url:'/auth/singup',
            data: payload,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        console.log('getting error while calling sing_up api ' + error)
    }
}


// API call for new suer sing up

export const log_in = async (data)=>{
    const { payload } = data
    try {
        const response = await axios({
            method:'POST',
            url:'/auth/login',
            data: payload,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        console.log('getting error while calling log_in api ' + error)
    }
}


// API call for fetch userData

export const fetch_user_data = async (token)=>{
    try {
        const response = await axios({
            method:'GET',
            url:'/auth/fetchdata',
            headers:{
                'token': token
            }
        })

        return response
    } catch (error) {
        console.log('getting error while calling fetch_user_data api ' + error)
    }
}