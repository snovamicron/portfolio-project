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
    }
}