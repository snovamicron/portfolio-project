import mongoose from 'mongoose'

const { Schema, model } = mongoose

const DataSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
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