import  jwt  from "jsonwebtoken";
import 'dotenv/config'

const verifyToken = (req, res, next)=>{   
    const token = req.header('token')
    if(!token){
       res.status(400).send('please enter a token')
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
        req.id = tokenData.id
        next()
    } catch (error) {
        res.status(401).send('invalid web token')
        console.log(error);
    }
}

export default verifyToken