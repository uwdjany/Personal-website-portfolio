import React, { useState } from 'react'

const Nav = () => {
    const Links=[
        {name:"home",link:"/"},
        {name:"about",link:"/"},
        {name:"skills",link:"/"},
        {name:"works",link:"/"},
        {name:"contact",link:"/"},
    ]
    const [open , setOpen]  = useState(false)
  return (
    
    <div className='shadow-xl w-full fixed  top-0 left-0'>
    <div className="md:flex items-center justify-between bg-secondary py-4 md:px-10 px-7">
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800  '>
    <span className='text-4xl'>
    
    </span>
    
    <span className='text-primary'>Uw</span>
    <span className='text-white' >Djanati</span>
    </div>
  
    <div onClick={()=>setOpen(!open)} 
    className='text-white text-4xl absolute right-8 top-4 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 uppercase absolute md:static bg-secondary md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' :'top-[-490px]'}`  }>
  {
       Links.map((link)=>(
        <li key={link.name} className='md:ml-8 text-xl  md:my-0 my-7'>
        <a href={link.link} className="hover:text-brightRed duration-500 text-white">{link.name}</a>
        </li>

       ))}
      
      
    
    </ul>
    
    </div>
    
    </div>
    
   
  )
}

export default Nav