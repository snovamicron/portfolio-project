import express from 'express'

const app = express()
const PORT = 4000

app.get('/', (req,res)=>{
    res.status(200).send('Hello World')
})


app.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost${PORT}`)
})