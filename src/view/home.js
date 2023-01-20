import React from 'react'
import Button from '../component/buttonComponent'

const Home = () => {

  const myIntro =[{
    name:"I'm Djanati UWASE",
    careerTitle:"FullStack Web Developer",
    body:"full stack web development as a specialty.if you are a business looking to recruit or establish an online presence.Contact me here!",
    body2:"!"
  }]
  return (
    
    
    
    
    <div className=' mx-auto sm:h-sreen md:max-w-full bg-secondary py-[250px] '>
    <div className='  '>
    {myIntro.map((data)=>(
      
<div className='text-center '>
<div className='space-y-5 mb-3'>
<h1 className='font-bold md:text-5xl text-xl text-white'>
      <span>HI,</span>
      {data.name}</h1>

      <h5 className='font-bold md:text-xl  text-primary'>{data.careerTitle}</h5>
      </div>
      <p className='max-w-md md:mx-auto text-xl mx-auto text-zinc-500  '>{data.body}</p>
      


</div>
      


    ))}
 
    
    </div>
    <div className="flex justify-center items-center space-x-3 uppercase font-bold leading-tight mt-10">
    <a href="" className="bg-pageColor text-white border-2 px-4 border-primary p-2 rounded-lg hover:bg-secondary">contact me</a>
  
    <a href="" className="bg-white border-4 border-pageColor p-2 px-5 rounded-lg hover:bg-pageColor hover:text-white">my resume</a>
    </div>
    </div>
    

    
  
    
  
  )
}

export default Home