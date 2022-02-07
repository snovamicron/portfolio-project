import mongoose from 'mongoose'
const { Schema } = mongoose


const message = new Schema(
    {
        conversationId : {
            type: String,
            required: true
        },
        senderId:{
            type: String,
            required:true
        },
        message:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('message', message)