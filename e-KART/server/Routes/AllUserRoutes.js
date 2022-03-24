import express from 'express'
import { body, validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// models
import userData from '../models/userModel.js'

// middleware
import AuthToken from '../middleware/AuthToken.js'


const router = express.Router()


//singUp validation array
const singUpValidationArr = [
    body('name').not().isEmpty(),
    body('email').not().isEmpty().isEmail(),
    body('password').isLength({min: 5})
]



//log in validation array
const logInValidationArr = [
    body('email').not().isEmpty().isEmail(),
    body('password').isLength({min: 5})
]



// user singup endpoint
router.post('/singup', singUpValidationArr, async(req, res)=>{

    // express validetor
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body
        let user = await userData.findOne({email}).exec()
        if(user){
            res.status(400).send('User already exist')
        }

        // convarting password into a hase
        const hash = bcrypt.hashSync(password, 10)
        
        user = await userData.create({
            name,
            email,
            password: hash
        })

        // converting userdata into a Json Web Token (JWT)
        let token = jwt.sign({id: user._id}, process.env.JWT_KEY)
        res.status(200).json({token})   

    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while singup new user '+error)
    }

})




// user login endpoint
router.post('/login', logInValidationArr, async (req, res)=>{
   
    // express validetor
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { email, password } = req.body
        let user = await userData.findOne({email}).exec()
        if(!user){
            res.status(404).send('User not found')
        }

        let authPass = bcrypt.compareSync(password, user.password)

        if(!authPass){
            res.status(403).send('Forbidden request')
        }

         // converting userdata into a Json Web Token (JWT)
         let token = jwt.sign({id: user._id}, process.env.JWT_KEY)
         res.status(200).json({token})

    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while login user '+error)
    }

})


// user data fetch end point
router.get('/fetchuserdata', AuthToken, async (req, res)=>{
    try {
        const { id } = req.body
        const user = await userData.findOne({_id : id}).exec()
        if(!user){
            res.status(404).send('user not found')
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send('internal servr error')
        console.log('getting error while fetching user data '+error)
    }
})


export default router