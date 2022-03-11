

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
        return response.data
    } catch (error) {
        console.log('getting error while calling sing_up api' + error)
    }
}