import { Router } from "express";
import { body, validationResult } from 'express-validator';

// model
import userData from '../model/UserModel.js'

// intialize express Router method
const router = Router()

// endpoint for new user sing up
router.post('/singup', [
    body('username').not().isEmpty(),
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5})
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let newUser = await userData.findOne({username: req.body.username}).exec()
        if(newUser){
        }
        
    } catch (error) {
        res.status(500).send('Internal server error')
        console.log('getting error while create new user in database' + error);
    }
})