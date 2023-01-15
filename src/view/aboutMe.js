import React from 'react'
import img from "../assets/image/myImg.png"
import photo from "../assets/image/image.jpeg"
const AboutPage = () => {
  return (
    <div className='h-screen bg-pageColor'>
    <div>
    <img src={photo} alt="" className='object-cover w-50 h-50' />
    </div>
    
    </div>
  )
}

export default AboutPage