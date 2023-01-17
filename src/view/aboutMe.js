import React from "react";
import Button from "../component/buttonComponent"

import photo from "../assets/image/image.jpeg";
const AboutPage = () => {
  return (
    <div className="h-screen bg-pageColor">
    <div className="text-center text-3xl text-white font-semibold py-9 uppercase tracking-[2px] leading-tight">
    <h2>About Me</h2>
    
    </div>
   <div className=" max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-6xl bg-secondary md:max-w-2xl p-6  ">
   <div className="md:flex">
   <div className="md:shirnk-0">
   <img src={photo} alt="" className="h-96 w-full object-cover md:h-full md:w-90 border-4 border-pageColor rounded-xl" />
   
   </div>
   <div className="p-8">
   <div className="uppercase text-primary text-3xl mb-9 md:mx-[130px] font-semibold tracking-[2px]">
   <h3>Short history</h3>
   </div>
   <div>
   <p className="text-zinc-400 text-xl leading-tight">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
   cum pariatur nostrum quo inventore modi eius, tenetur aliquid
   autem asperiores id voluptates, eum provident consequatur
   suscipit vero. Laboriosam, sunt vel! Lorem ipsum dolor sit amet
   consectetur adipisicing elit. Labore doloribus explicabo,
   corrupti consequuntur aperiam est exercitationem fuga quos
   ipsam, similique id possimus rerum pariatur vel aliquid nulla
   beatae, soluta dolorem?
 </p>
   </div>
   
   </div>

   </div>
   </div>
    </div>
  );
};

export default AboutPage;
