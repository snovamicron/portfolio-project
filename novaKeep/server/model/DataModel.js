import mongoose from 'mongoose'

const { Schema, model } = mongoose

const DataSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    heading:{
        type:String
    },
    note:{
        type:String
    },
    note_type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

export default model('Notes',DataSchema)