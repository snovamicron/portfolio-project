import express from 'express'

// models
import productsData from '../models/productModel.js'

const router = express.Router()


// end point for fetching all products data from db
router.get('/fetchproductsdata', async(req, res)=>{
    try {
        const products = await productsData.find({}).exec()
        if(!products){
            res.status(404).send('no products found')
        }
        res.status(200).json({products})
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while fetch all products data '+error)
    }
} )


export default router