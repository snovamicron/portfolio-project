import express from 'express'
import cors from 'cors'
import ConnectToMongoDB from './database/DataBaseConnection.js'

// Routes
import authRouter from './routes/AuthRoutes.js'
import noteRouter from './routes/NoteRoutes.js'

const app = express()
const PORT = 4000

// cros error handling
app.use(cors())

// parsing incoming JSON payload requests 
app.use(express.json())

// connection with database
ConnectToMongoDB()

app.get('/',(req, res)=>{
    res.status(200).send('hello world')
})

// middlware for sing up and log in
app.use('/auth',authRouter)

// middlware for notes
app.use('/note',noteRouter)


app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost:${PORT}`)   
})