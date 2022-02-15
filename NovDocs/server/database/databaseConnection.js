import mongoose from 'mongoose'

const connection = async (password = "playboyDelta1234")=>{
    const URI = `mongodb+srv://soumyadeep:${password}@googledocs.2qiua.mongodb.net/google-docs-clone?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URI)
        console.log('database connectd successfully');
    } catch (error) {
        console.log('get error while connecting to database', error)
    }
}

export default connection