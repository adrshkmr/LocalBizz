const express = require('express')
const mongoose = require('mongoose')
const cors= require("cors");
const ShopModel = require('./models/Shop')
const ProductModel = require('./models/Product')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://pg65734:WyN4oDGPb1vzIZRE@cluster0.7ihqnkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register', (req, res)=>{
   ShopModel.create(req.body)
  .then(shops => res.json(shops))
  .catch(err => res.json(err))
})

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await ShopModel.findOne({ email, password });
  
    if (user) {
      console.log(user)
      res.status(200).json({  message: 'Login successful',user });
    } else {
      res.status(401).json({  error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/product', (req, res)=>{
  ProductModel.create(req.body)
  .then(product => res.json(product))
  .catch(err => res.json(err))
})

app.post('/home', async (req, res) => {
  const shop = req.body.shop
  try {
    const product = await ProductModel.find({ productshop: shop});
    res.json(product)
  } catch (err) {
    console.error('Error fetching user info:', err);
    res.status(500).send('Internal Server Error');
  }
});




app.listen(3000, ()=>{
  console.log("server running");
})