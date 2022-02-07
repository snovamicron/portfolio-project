import mongoose from 'mongoose';


const connectToMongo = (password) => {
    const mongodbURI = `mongodb+srv://sonova:${password}@protfolioprojectsdata.f2gzb.mongodb.net/easyChat?retryWrites=true&w=majority`
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
