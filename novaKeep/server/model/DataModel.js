import { Schema, model } from 'mongoose'

const DataSchema = new Schema({
    title:{
        type:String
    },
    payload:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

export default model('Notes',DataSchema)