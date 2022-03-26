import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'

const PORT = process.env.PORT || 5000
const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors:{
        origin:"*",
        methods:["GET", "POST"]
    }
})

app.use(cors())

app.get('/', (req, res)=>{
    res.status(200).send('Hello World')
})


io.on('connection', (socket)=>{
    socket.emit('me', socket.id)

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('callended')
    })

    socket.on('calluser',({userToCall, signalData, from, name})=>{
        io.to(userToCall).emit("calluser", { signal: signalData, from, name})
    })

    socket.on('answercall',(data)=>{
        io.to(data.to).emit("callaccepted", data.signal)
    })
})


httpServer.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})