import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AllBlogs from './components/AllBlogs'
import {Route, Routes} from 'react-router-dom'
import Tostify from './components/Tostify'

function App() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Tostify/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/blogs' element={<AllBlogs/>}/>
    </Routes>
    </div>
  )
}

export default App
