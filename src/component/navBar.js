import React, { useState } from 'react'

const Nav = () => {
    const Links=[
        {name:"home",link:"/"},
        {name:"about",link:"/"},
        {name:"skills",link:"/"},
        {name:"works",link:"/"},
        {name:"contact",link:"/"},
    ]
    const [open , setOpen]  = useState('false')
  return (
    
    <div className='md:flex md:justify-between py-6 bg-black text-white font-body tracking-wider font-bold block'>
    <div className='flex justify-between px-5'>
    <div className='md:text-4xl text-3xl md:mt-3 md:ml-20'>
    <span className='text-primary'>Uw</span>
    <span>Djanati</span>
    </div>
    <div onClick={()=>setOpen(!open)} className=' text-white md:hidden text-4xl absolute right-8 top-6'>

    <ion-icon name={open ? "close" : "menu"}></ion-icon>
    
    </div>
    </div>
    

    <nav className='md:text-xl px-4 text-xl justify-between mx-2 md:mr-20'>
    <ul className={`md:flex md:gap-6 uppercase py-4 absolute md:static  bg-black md:z-auto z-[-1]left-0 w-full md:w-auto transition-all duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>


    {Links.map((link)=>(
        <li className='my-7 md:my-0'>
        <a href={link.link} className="hover:text-primary transition ease-out duration-300">{link.name}</a>
        </li>
    )
        


    )}
   
    
    
   
    </ul>
    </nav>

    
    
    </div>
    
   
  )
}

export default Nav