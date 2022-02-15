import { Server } from "socket.io"
import { getDocumnet, saveDocumnet } from "./controller/documentController.js"
import connection from "./database/databaseConnection.js"

const PORT = 4000

connection()

const io = new Server(PORT, {
    cors:{
        origin:"http://localhost:3000",
        methods:"GET, POST"
    }
})


io.on('connection', socket => {
    console.log('user connected')
    socket.on('get-document', async documentId => {
        const documnet = await getDocumnet(documentId)
        socket.join(documentId)
        socket.emit('load-document', documnet.data)

        socket.on('send-change', delta =>{
            socket.broadcast.to(documentId).emit('receive-change', delta)
        })

        socket.on('save-documnet', async data =>{
            await saveDocumnet(documentId, data)
        })
    })

})