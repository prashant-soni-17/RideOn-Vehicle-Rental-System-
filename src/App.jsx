import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import BookNow from './components/BookNow'
import OwnerRegister from './components/Owner-register'

const App = () => {
  return (
    <div className='w-[100%] h-[100%]'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/BookNow' element={<BookNow/>} />
        <Route path='/Owner-register' element={<OwnerRegister/>} />
      </Routes>

    </div>
  )
}

export default App
