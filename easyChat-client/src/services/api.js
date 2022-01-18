import axios from 'axios'


// api call for join the chat

export const joinChat = async (data) =>{
    try {
        const response = await axios({
            method:'post',
            url:'/user/join-chat',
            data:{
                "data":{...data}
            }
        })
        return response.data
    } catch (error) {
        console.log('have error while calling joinChat API', error.message);
    }
}

// api call for fatching all users data

export const fatchUserData = async (id) => {
    try {
        const response = await axios({
            method:'post',
            url:'/user/fatch-users',
            data:{
                "googleId":id
            }
        })
        return response.data
    } catch (error) {
        console.log('have error whie calling fatchUserData while API', error.message);
    }
}


export const setConversation = async (obj)=>{
    try {
        const response = await axios({
            method:'post',
            url:'/conversation/add',
            data:{
                obj
            }
        })
        return response.data
    } catch (error) {
        console.log('have error while calling setConversation API ', error.message);
    }
}
