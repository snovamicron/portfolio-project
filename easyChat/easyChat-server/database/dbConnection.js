import mongoose from 'mongoose';


const connectToMongo = (password) => {
    const mongodbURI = `mongodb+srv://soumya:${password}@chat.tfyph.mongodb.net/REAL_TIME_CHAT_APPLICATION?retryWrites=true&w=majority`
    try {
        mongoose.connect(mongodbURI,()=>{
            console.log(`connect to database successfully`);
        })
    } catch (error) {
        console.log(" getting error while connecting to database");
        console.log(error);
    }
}

export default connectToMongo
