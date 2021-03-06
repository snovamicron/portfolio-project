import express from 'express'
import ConversationModel from '../database/model/ConversationModel.js'

const router = express.Router()

router.post('/add', async(req, res)=>{
    try {
        const { senderId, receiverId } = req.body.obj
        const addedConversation = await ConversationModel.findOne({membres:{ $all: [senderId, receiverId]}}).exec()
        if (!addedConversation) {
            const conversation = new ConversationModel({
                membres:[
                    senderId,
                    receiverId
                ]
            })
            await conversation.save()
            res.status(200).send('conversation have saved successfully')
        } else {
            res.status(200).send('conversation already saved')
        }
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error.message);
    }
})

router.post('/get', async(req, res)=>{
    try {
        const { senderId, receiverId } = req.body.obj
        const conversation = await ConversationModel.findOne({membres:{ $all: [senderId, receiverId]}}).exec()
        if (conversation) {
            res.status(200).json(conversation)
        } else {
            res.send(404).send('conversation not found')
        }
    } catch (error) {
        res.status(500).send('Internal server error')
        console.log(error.message);
    }
})

export default router 


