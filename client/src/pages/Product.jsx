import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

function Signup() {
  const navigate = useNavigate();
  const [productname, setProductname] = useState('')
  const [productprice, setProductprice] = useState('')
  const [productdetails, setProductdetails] = useState('')
  const [productshop, setProductshop] = useState('')
  const [productimage, setProductimage] = useState('')
  
  const [error, setError] = useState('')

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem('shop'));
    if (userDataFromStorage) {
      setProductshop(userDataFromStorage.email); // Assuming email is stored under email property
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/product', {
      productname,
      productprice,
      productdetails,
      productshop,
      productimage
    })
    .then((response) => {
      console.log(response.data)
      navigate('/home')
    })
    .catch((error) => {
      setError(error.response.data.message)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Add Product</h2>
        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className='block text-gray-700'>Product Name: </label>
            <input type='text' name='productname' placeholder='Enter Product Name' value={productname} onChange={(e) => setProductname(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label className='block text-gray-700'>Product Price: </label>
            <input type='text' name='productprice' placeholder='Enter Price' value={productprice} onChange={(e) => setProductprice(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label className='block text-gray-700'>Product Image: </label>
            <input type='text' name='productimage' placeholder='Enter image url' value={productimage} onChange={(e) => setProductimage(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label className='block text-gray-700'>Product Details: </label><br/>
            <textarea name="productdetails" rows="4" cols="50" placeholder='Enter Description' value={productdetails} onChange={(e)=> setProductdetails(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
            <button type='submit' className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none">Submit</button>
            <Link to='/home' className="text-blue-500 underline mt-4 block text-center">go to home</Link>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Signup;