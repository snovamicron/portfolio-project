import express from 'express'
import ConnectionToDatabase from './database/connection.js'
import InsertData from './defaultDataInsert.js'
import cors from 'cors'

// Routes
import userRoutes from './Routes/AllUserRoutes.js'

const app = express()
const PORT = 4000

// handeling cors error
app.use(cors())

// parshing body boject
app.use(express.json())


ConnectionToDatabase()

// middleware for all user routes
app.use('/user', userRoutes)


app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost:${PORT}`)
})


// insert products data to database
InsertData()
