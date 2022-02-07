import express from 'express'
import dotenv from 'dotenv'
import user from '../database/model/ProfileModel.js'

dotenv.config()
const router = express.Router()

// end point for join the chat 
// http:localhost:4000/user/sing-up

router.post('/join-chat',
    async (req, res) => {
        try {
            let userData = await user.findOne({googleId: req.body.data.googleId}).exec()
            if (userData) {
                res.status(200).send('user log in successfully')
            } else {
                userData = new user(req.body.data)
                 await userData.save()
                res.status(200).send('user join the easyChat successfully ')
            }
        } catch (error) {
            res.status(500).send('Internal server error')
            console.log(error.message);
        }
    })


// end point for fatching all users 
//http:localhost:4000/user/fatching-user

router.post('/fatch-users',async(req, res)=>{
    try {
        let userData = await user.findOne({googleId: req.body.googleId}).exec()
        if(!userData){
            res.status(400).send(` sorry can't fatch data` )
        }else{
            userData = await user.find({})
            res.status(200).json(userData)
        }
    } catch (error) {
        res.status(500).send('Internal server error')
    }
})

export default router