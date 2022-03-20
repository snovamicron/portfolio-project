

import mongoose from 'mongoose'

const databaseURI = ''

const ConnectionToDatabase = async()=>{
    try {
        await mongoose.connect(databaseURI)
    console.log('successfully conneted with database')
    } catch (error) {
        console.log('getting error while connecting to database ' + error)
    }
}


export default ConnectionToDatabase