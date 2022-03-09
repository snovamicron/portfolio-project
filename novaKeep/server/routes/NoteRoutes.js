import { Router } from 'express'

// models
import noteData from '../model/DataModel.js'
import userData from '../model/UserModel.js'

// middleware
import verifyToken from '../middleware/userAuthentication.js'

const router = Router()

// endpoint for creating new note of a saved user
router.post('/newnote', verifyToken, async(req, res)=>{
    try {
        const user = await userData.findOne({_id: req.id}).exec()
        if(!user){
            res.status(404).send('user not found')
        }
        try {
            noteData.create({
                userId: req.id,
                payload: req.body.payload,
                title:req.body.title
            })
        } catch (error) {
            
        }
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error);
    }
})

export default router


