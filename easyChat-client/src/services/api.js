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



export const getConversation = async (obj) => {
    try {
        const response = await axios({
            method:'post',
            url:'/conversation/get',
            data:{
                obj
            }
        })
        return response.data
    } catch (error) {
        console.log('have error while calling getConversation API ', error.message);
    }
}


export const addMessage =  async(obj) => {
    try {
        const response = await axios({
            method:'post',
            url:'/message/add',
            data:{
                obj
            }
        })
        return response.data
    } catch (error) {
        console.log('have error while calling setMessage API ', error.message);
    }
}


export const getMessage = async(obj)=>{
    try {
        const response = await axios({
            method:'get',
            url:'/message/get',
            headers:{
                'id':obj.id
            }
        })
        return response.data.messages
    } catch (error) {
        console.log('have error while calling getMessage API ', error.message);
    }
}