import express from 'express'
import MessageModel from '../database/model/MessageModel.js'

const router = express.Router()


router.post('/add', async (req, res)=>{
    try {
        const { conversationId, senderId, message } = req.body.obj
        const newMessage = new MessageModel({
            conversationId,
            senderId,
            message
        })
        await newMessage.save()
        res.status(200).send(' message saved successfully ')
    } catch (error) {
      res.status(500).send(' Internal server error ')
      console.log(error.message);
    }
})

router.get('/get', async(req, res)=>{
    try {
        const conversationId = req.header('id')
        const messages = await MessageModel.find({ conversationId })
        if(!messages){
            res.status(400).send(' conversationId is not valid ')
        }else{
            res.status(200).json({ messages })
        }
    } catch (error) {
        res.status(500).send(' Internal server error ')
        console.log(error.message);
    }
})


export default router
