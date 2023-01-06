import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
    
    
    <a href="/" className='border-2 p-2 mt-4 text-xl font-bold text-white'>
    {props.children}
    </a>
    </div>
  )
}

export default Button