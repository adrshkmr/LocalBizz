import Signup from './pages/Signup'
import Login from './pages/Login'
import React from 'react'
import Home from './pages/Home'
import Land from './pages/Land'
import Product from './pages/Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Land/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/addproduct' element={<Product/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App