import mongoose from 'mongoose'

const documnetSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    data:{
        type: Object,
        required: true
    }
})

export default mongoose.model('document', documnetSchema)