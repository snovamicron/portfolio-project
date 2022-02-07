import { Server } from "socket.io";


const PORT = 5000 

const io = new Server(PORT, {
    cors:{
        origin:'http://localhost:3000'
    }
})


const userData = []
const addUser = (userId, socketId) => {
    !userData.some( ele => ele.userId === userId ) && userData.push({ userId, socketId })
}

const sendMessage = (userId)=> {
    return userData.find( ele => ele.userId === userId)
} 

const clearUser = (userId) =>{
   userData.splice(userData.findIndex(ele => ele.userId === userId), 1)
}

// server connection
io.on('connection', (socket)=>{
    console.log('User Connected');  
    socket.on('addUser', ( userId )=>{
        addUser(userId, socket.id)
        console.log('user added successfully ');
        io.emit('getUsers', userData)  
    })

    //send message
    socket.on('sendMessage', ( data )=> {
        const receiver = sendMessage(data.receiverId)
        console.log('message send !' + receiver);
        if(receiver){
            io.to(receiver.socketId).emit('receiveMessage',{
                senderId : data.senderId,
                message: data.message,
                createdAt: data.createdAt
            })
        }
    })

    // server disconnect
    socket.on('clearUser', ( userId )=> {
        clearUser(userId)
        console.log('user disconnected successfully')
    })
})