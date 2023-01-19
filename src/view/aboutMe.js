import React from "react";
import Button from "../component/buttonComponent";

import myImg from "../assets/image/profile.jpg"
const AboutPage = () => {
  
  const aboutData =[{
    title:"short history",
    
    history:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasicum pariatur nostrum quo inventore modi eius, tenetur aliquidautem asperiores id voluptates, eum provident consequat ursuscipit vero. Laboriosam, sunt vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus explicabo,corrupti consequuntur aperiam est exercitationem fuga quos ipsam, similique id possimus rerum pariatur vel aliquid nulla beatae, soluta dolorem?"
  }]
  return (
    <>
    <div className="md:h-[800px] h-[1300px] bg-pageColor">
    <div className="text-center text-3xl text-white font-semibold py-9 uppercase tracking-[2px] leading-tight">
    <h2>About Me</h2>
    
    </div>
   <div className=" max-w-md mx-auto rounded-xl shadow-md  bg-secondary md:max-w-5xl p-6  ">
   <div className="md:flex">
   <div className="md:shirnk-0">
   <img src={myImg} alt="" className="h-96 w-full object-cover md:h-full md:w-50 border-4 border-pageColor rounded-xl" />
   
   </div>
   

   {
    aboutData.map((data)=>(
      <div className="p-8">
      <div className="uppercase text-primary text-2xl md:text-3xl mb-9 md:mx-[80px] font-semibold tracking-[2px]">
      <h3>{data.title}</h3>
      </div>
      <div>
      <p className="text-zinc-400 text-xl leading-tight">
    {data.history}
    </p>
      </div>
      
      </div>
    ))
   }

  
   </div>
  <div className="flex justify-center items-center space-x-3 uppercase font-semibold leading-tight md:ml-[380px]">
  <a href="" className="bg-white p-2 rounded-lg">visit my Github</a>

  <a href="" className="bg-white p-2 rounded-lg">Download CV</a>
  </div>
   </div>
    </div>

    
    </>
    
  );
};

export default AboutPage;
