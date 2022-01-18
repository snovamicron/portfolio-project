import mongoose from 'mongoose'

const ConversationSchema = new mongoose.Schema({
    membres: {
        type: Array,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('conversation', ConversationSchema)