import jwt from "jsonwebtoken";
import 'dotenv/config'

export default async function AuthToken (req, res, next) {
    try {
        const token = req.header('token')
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.body = decode
        next()
    } catch (error) {
        res.status(403).send('nivalide token')
        console.log('getting error while authenticat web token '+error)
    }
}