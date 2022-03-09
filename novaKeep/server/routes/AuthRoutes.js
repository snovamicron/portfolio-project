import { Router } from "express";
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
            res.status(400).send('username is not available create another')
        }
        
        newUser = await userData.findOne({email: req.body.email}).exec()
        if(newUser){
            res.status(400).send('email is already taken')
        }

        try {
            let password = await bcrypt.hash(req.body.password, 10)

            try {
                newUser = await userData.create({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password
                })
                let token = jwt.sign({ id: newUser._id }, process.env.JWT_PRIVATE_KEY)
                res.status(200).json({ token })
            } catch (error) {
                res.status(500).send('internal server error')
                console.log('getting error while create new user in database '+error)
            }

        } catch (error) {
            res.status(500).send('internal server error')
            console.log('getting error while creating password hash'+error)
        }
        
    } catch (error) {
        res.status(500).send('Internal server error')
        console.log('getting error while create new user in database' + error);
    }
})


// endpoint for login
router.post('/login', [
    body('username').not().isEmpty(),
    body('password').isLength({min: 5})
], async (req, res)=>{
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  
  try {
      let saveUser = await userData.findOne({username: req.body.username}).exec()

      if(!saveUser){
          res.status(404).send('user not found')
      }

      const verifiedPassword = await bcrypt.compare(req.body.password , saveUser.password)
      if(!verifiedPassword){
        res.status(401).send('please enter correct credentials')
      }

      let token = jwt.sign({ id: saveUser._id }, process.env.JWT_PRIVATE_KEY)
      res.status(200).json({ token })
      
  } catch (error) {
      res.status(500).send('internal server error')
      console.log(error)
  }
  
})



export default router