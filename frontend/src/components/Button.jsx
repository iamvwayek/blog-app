import React from 'react'

function Button({children, handleClick}) {
  return (
    <button className='bg-black/10 text-xl font-light px-5 py-2 rounded-full shadow-sm hover:shadow-white hover:text-white hover:bg-blue-500 hover:translate-0.5 smooth-transition cursor-pointer' onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
