import { Router } from 'express'

// models
import noteData from '../model/DataModel.js'
import userData from '../model/UserModel.js'

// middleware
import verifyToken from '../middleware/userAuthentication.js'

const router = Router()


// end point for fatching all notes
router.get('/getnotes', verifyToken, async(req, res)=>{
    try {
        const user = await userData.findOne({_id: req.id}).exec()
        if(!user){
            res.status(404).send('user not found')
        }
        try {
            let notes = await noteData.find({userId: req.id}).exec()
            if(!notes){
                res.status(404).send('on notes available')
            }
            res.status(200).json({ notes })
        } catch (error) {
            res.status(500).send('internal server error')
            console.log(error)
        }
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error)
    }
})


// endpoint for creating new note of a saved user
router.post('/newnote', verifyToken, async(req, res)=>{
    try {
        const user = await userData.findOne({_id: req.id}).exec()
        if(!user){
            res.status(404).send('user not found')
        }
        try {
           let note = await noteData.create({
               _id:req.note_id,
                userId: req.id,
                note: req.body.note,
                heading:req.body.heading
            })
            res.status(200).json(note)
        } catch (error) {
            res.status(500).send('internal server error')
            console.log(error)
        }
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error);
    }
})

// endpoint for updating existing note
router.put('/updatenote/:id?', verifyToken, async(req, res)=>{
    const user = await userData.findOne({_id: req.id}).exec()
    if(!user){
        res.status(404).send('user not found')
    }
    try {
        const note =  await noteData.findOneAndUpdate({_id:req.params.id},{...req.body.update}).exec()
        if(!note){
            res.status(404).send('note dose not exist')
        }
        res.status(200).send('note updated successfully')

    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error)
    }

})


// endpoint for deleteing a existing note
router.delete('/deletenote/:id?', verifyToken, async(req, res)=>{
    const user = await userData.findOne({_id: req.id}).exec()
    if(!user){
        res.status(404).send('user not found')
    }
    try {
        const note = await noteData.findByIdAndDelete(req.params.id).exec()
        if(!note){
            res.status(404).send('note dose not exist')
        }
        res.status(200).send('note successfully deleted')
    } catch (error) {
        res.status(500).send('internal server error')
        console.log(error)
    }
})

 
export default router


