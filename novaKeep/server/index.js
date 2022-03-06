import express from 'express'

const app = express()
const PORT = 4000

app.get('/',(req, res)=>{
    res.status(200).send('hello world')
})

app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost:${PORT}`)   
})