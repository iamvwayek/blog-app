import React, { useState } from 'react'
import Button from './Button'
import CreateBlog from './CreateBlog'
import {useNavigate} from 'react-router-dom'

function Hero() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  function createBlog(e) {
    e.preventDefault()

    setVisible(true)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='bg-cyan-200 px-15 py-15 rounded-full fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50'>
        <div className='bg-cyan-200 px-15 py-15 rounded-full fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50'>
          <div className='bg-cyan-200 px-15 py-20 rounded-full fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 flex flex-col justify-center items-center gap-4'>
            <div className='text-center mb-4'>
              <h1 className='text-6xl text-blue-500 my-3'>Blog App</h1>
              <p className='text-xl'>Here you can create you own blogs without any login and its completely free.</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <Button handleClick={()=>navigate('/blogs')}>All Blogs</Button>
              <Button handleClick={createBlog}>Create Blog</Button>
            </div>
          </div>
        </div>
      </div>
      <div id='createBlog' className='absolute'>
        {visible && <CreateBlog setVisible={setVisible} />}
      </div>
    </div>
  )
}

export default Hero
