import React from 'react'
import Button from '../component/buttonComponent'

const Home = () => {

  const myIntro =[{
    name:"I'm Djanati UWASE",
    careerTitle:"FullStack Web Developer",
    body:"full stack web development as a specialty.if you are a business looking to recruit",
    body2:"or establish an online presence.Contact me here!"
  }]
  return (
    <section className='w-full h-screen bg-secondary'>
    
    
    
    <div className=' text-center pt-60'>
    {myIntro.map((data)=>(
      <div className=''>
<div className='pb-30'>
<h1 className='font-bold md:text-5xl text-3xl text-white'>
      <span>HI,</span>
      {data.name}</h1>

      <h5 className='font-bold md:mt-10 md:text-xl mt-5 text-primary'>{data.careerTitle}</h5>
      <p className='md:text-2xl pt-8 text-zinc-500 '>{data.body}</p>
      <p className='md:text-2xl text-zinc-500'>{data.body2}</p>

</div>
</div>
      


    ))}
    <div className='flex items-center justify-center mt-10 space-x-5'>
    <Button>Contact Me</Button>
    <Button>My Resume</Button>
    </div>
   
    </div>
    
    </section>
    
  
    
  
  )
}

export default Home