import express from 'express'
import dotenv from 'dotenv'
import user from '../database/model/ProfileModel.js'

dotenv.config()
const router = express.Router()

// end point for join the chat 
// http:localhost:4000/user/sing-up

router.post('/join-chat',
    async (req, res) => {
        console.log(req.body.data);
        try {
            let userData = await user.findOne({googleId: req.body.data.googleId}).exec()
            if (userData) {
                res.status(200).send('user log in successfully')
            } else {
                userData = new user({ ...req.body.data })
                 await userData.save()
                res.status(200).send('user join the easyChat successfully ')
            }
        } catch (error) {
            
        }
    })


export default router