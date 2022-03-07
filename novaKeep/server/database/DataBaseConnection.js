import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://sononva:fatBoyOmega2002@google-keep-clone.0kykb.mongodb.net/PROJECT-DODOLIST?retryWrites=true&w=majority'

const ConnectToMongoDB = async ()=>{
    await mongoose.connect(mongoURI)
    console.log('connected to database sucessfully')
}

export default ConnectToMongoDB