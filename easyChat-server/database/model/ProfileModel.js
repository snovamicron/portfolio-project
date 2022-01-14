import mongoose from 'mongoose'
const { Schema } = mongoose

const profileSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    imageUrl : {
        type: String,
        required: true
    },
    googleId:{
        type: String,
        required: true
    },
    givenName:{
        type: String,
        required: true
    },
    familyName:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('profilemodel', profileSchema)