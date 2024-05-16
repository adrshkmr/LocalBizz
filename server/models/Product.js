const mongoose =require('mongoose')
const ProductSchema = new mongoose.Schema({
    productname: String,
    productdetails: String,
    productprice: String,
    productshop: String,
    productimage: String
})
const ProductModel =mongoose.model("products", ProductSchema);
module.exports= ProductModel