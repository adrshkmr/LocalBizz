const mongoose =require('mongoose')
const ShopSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    description: String,
    image: String,
    pincode: String,
    category: String,
})
const ShopModel =mongoose.model("shops", ShopSchema);
module.exports= ShopModel