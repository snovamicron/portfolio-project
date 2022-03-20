import express from 'express'
import ConnectionToDatabase from './database/connection.js'
import InsertData from './defaultDataInsert.js'

const app = express()
const PORT = 4000


ConnectionToDatabase()

app.get('/', async(req,res)=>{
   res.status(200).send('hello world')
})


app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost${PORT}`)
})


// insert products data to database
InsertData()
