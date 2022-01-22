import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import connectToMongo from './database/dbConnection.js'
import ProfileRoutes from './routes/ProfileRoutes.js'
import ConversationRoutes from './routes/ConversationRoutes.js'
import MessageRoutes from './routes/MessageRoutes.js'

dotenv.config()
const app = express();
const PORT = 4000;
app.use(express.json()) // for getting requests in json formate
app.use(cors()) // for handleing cors related server error

connectToMongo(process.env.MONGO_DATABASE_PASSWORD)

app.get('/', (req, res) => {
    res.status(200).send('server is running properly')
});

app.use('/user', ProfileRoutes)
app.use('/conversation', ConversationRoutes)
app.use('/message', MessageRoutes)

app.listen(PORT, ()=>{
    console.log(`sever in running on http://localhost:${PORT}`);
})