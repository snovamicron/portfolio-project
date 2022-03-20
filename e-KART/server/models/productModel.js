import mongoose from "mongoose";

const { model, Schema } = mongoose

export default model('product', new Schema({
   id: String,
   url: String,
   detailUrl: String,
   title: Object,
   price: Object,
   description: String,
   discount: String,
   tagline: String 
}))