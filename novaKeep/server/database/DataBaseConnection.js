import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://sononva:fatBoyOmega2002@google-keep-clone.0kykb.mongodb.net/PROJECT-DODOLIST?retryWrites=true&w=majority'

const ConnectToMongoDB = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log('connected to database sucessfully')
    } catch (error) {
        console.log('getting error while connecting to database   ' + error);
    }
   
}

export default ConnectToMongoDB