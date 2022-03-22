import mongoose from 'mongoose'

const { Schema, model } = mongoose


const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        index: false
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        index:false
    }
},
{
    timestamps: true
}
)

export default model('userdata', userSchema)