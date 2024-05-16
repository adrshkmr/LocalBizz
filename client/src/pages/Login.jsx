import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shop, setShop] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/signin', {
      email: email,
      password: password
    })
    .then((response) => {
      if(response.data.error){
        alert("wrong password or email");
      } else {
        localStorage.setItem('shop', JSON.stringify(response.data.user));
        navigate('/home')
      }
    })
    .catch((error) => {
      setError(error.response.data.message)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold text-center m-6">Login</h2>
        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <form onSubmit={handleSubmit} className="space-3">
            <label className='block text-gray-700'>Email: </label>
            <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <label className='block text-gray-700'>Password: </label>
            <input type='password' name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" /><br />
            <button type='submit' className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-800 hover:shadow-lg focus:outline-none">Submit</button>
            <p className='mt-6 text-center'>Don't have an account? <Link to='/signup' className="text-blue-500 underline">Sign up</Link></p>
          </form>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Login;