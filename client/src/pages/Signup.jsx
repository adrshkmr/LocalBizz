import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [pincode, setPincode] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', {
      name: name,
      email: email,
      password: password,
      description: description,
      image: image,
      pincode: pincode,
      category: category
    })
    .then((response) => {
      console.log(response.data)
      navigate('/login')
    })
    .catch((error) => {
      setError(error.response.data.message)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold text-center m-6">Register</h2>
        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form onSubmit={handleSubmit} className="space-3">
          <label>Shop Name: </label><br/>
            <input type='text' name='shopname' placeholder='Enter Shop Name' value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label>Email: </label><br/>
            <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label>Password: </label><br/>
            <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" type='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <label>Description: </label><br/>
            <textarea className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" name="description" rows="4" cols="50" placeholder='Enter Description' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea><br />
            <label>Image: </label><br/>
            <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" type='text' name='Image' placeholder='Enter Image link' value={image} onChange={(e) => setImage(e.target.value)} /><br />
            <label>Pin Code: </label><br/>
            <input className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" type='text' name='pincode' placeholder='Enter Pin Code' value={pincode} onChange={(e) => setPincode(e.target.value)} /><br />
            <label>Category: </label><br/>
            <select className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" name="category" value={category} onChange={e=> setCategory(e.target.value)}>
               <option value="" disabled>Select category</option>
               <option value="Grocery">Grocery</option>
               <option value="Meat">Meat</option>
               <option value="Vegetables">Vegetables</option>
               <option value="Medical">Medical</option>
               <option value="Stationary">Staitonary</option>
               <option value="General Store">General Store</option>
            </select><br />
            <button type='submit' className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none">Submit</button>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
          <p className='mt-6 text-center'>Already Have an Account? <Link to='/login' className="text-blue-500 underline">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup