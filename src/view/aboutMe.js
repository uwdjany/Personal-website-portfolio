import React from 'react'
import img from "../assets/image/myImg.png"
import photo from "../assets/image/image.jpeg"
const AboutPage = () => {
  return (
    <div className='h-screen bg-pageColor'>
    <div className=''>
   
    <h2 className=' text-center md:text-5xl text-4xl font-bold py-5 text-white  after:bg-primary after:w-[60px] after:h-[7px] after:absolute after:left-[610px] after:top-[800px] after:z-[1]  before:bg-primary before:w-[60px] before:h-[7px] before:absolute before:right-[610px] before:top-[800px] before:z-[1]'>About Me</h2>
    
    </div>
    
    <div className='flex items-center justify-center border-2  '>
    <div className='bg-secondary w-[1200px] h-[500px] '>
    
   
    <img src={photo} alt="" className='object-cover w-[400px] h-[500px] mt-[100px] ' />
    </div>
    </div>
    
    </div>
  )
}

export default AboutPage