import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
    
    
    <a href="/" className='border-2 p-2 mt-4 text-xl font-bold text-white rounded-md tracking-[2px] shadow-third bg-third'>
    {props.children}
    </a>
    </div>
  )
}

export default Button