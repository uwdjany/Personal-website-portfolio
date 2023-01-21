import React from "react";

const SkillsPage = () => {
  const skillsData = [
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "UI/UX Design",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "Frontend",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "backend",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "soft skills",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "database",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "Front end",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },

  ];
  return (
    <div className=" lg:h-[1000px] h-[1800px] md:[400px] bg-secondary ">
      <div className=" text-center py-9">
        <h1 className="text-white text-3xl font-semibold">SKILLS PAGE</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-6 md:px-[150px]  md:py-3 py-[30px] ">

      { 
        skillsData.map((data)=>(

          <div className="shadow-lg shadow-blue-500/50 rounded-md  md:mx-0    lg:px-0 mx-5 ">
        
          
          <div className="text-[100px] text-white text-center ">
          {data.skillIcon}
          </div>
          <div className="text-2xl text-primary text-center font-semibold uppercase tracking-[1px] leading-tight">
            <h5>{data.skillTitle}</h5>
          </div>
          <div className="my-6 pb-5 md:pb-0">
            <p className=" text-center  text-2xl text-white">
            {data.skillDesc}
            </p>
          </div>
      
    </div>
        ))
      }
      
      

      
     
      
      </div>
      

      
    </div>
  );
};

export default SkillsPage;
