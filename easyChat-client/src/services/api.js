import axios from 'axios'


// api call for join the chat

export const joinChat = async (data) =>{
    const response = await axios({
        method:'post',
        url:'/user/join-chat',
        data:{
            "data":{...data}
        }
    })
    return response.data
}

