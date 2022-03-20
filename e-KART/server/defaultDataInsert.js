
import productModel from "./models/productModel.js"
import { products } from "./constants/productData.js"


const InsertData = async ()=>{
    try {
        await productModel.deleteMany({})
        await productModel.insertMany(products)
        console.log('porducts inserted successfully')
    } catch (error) {
        console.log('getting error while inserting default data (products data) '+error)
    }
}

export default InsertData