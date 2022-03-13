

import axios from 'axios'

// API call for create new note

export const new_note = async (payload)=>{
    console.log(payload.data.heading)
    try {
        const response = await axios({
            method:'POST',
            url:'/note/newnote',
            headers:{
                'token': payload.token
            },
            data: payload.data
        })

        return response
    } catch (error) {
        console.log('getting error while new_note api ' + error )
    }
}


// API call for fetch all notes

export const get_notes = async (token)=>{
    try {
        const response = await axios({
            method:'GET',
            url:'/note/getnotes',
            headers:{
                'token': token
            }
        })
        return response
    } catch (error) {
        console.log('getting error while calling _get_notes api ' + error)
    }
}