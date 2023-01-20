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
      skillTitle: "UI/UX Design",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "Front end",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "Front end",
      skillDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi, dolor error eos expedit",
    },
    {
      skillIcon: <ion-icon name="menu"></ion-icon>,
      skillTitle: "Front end",
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
    <div className=" md:h-screen h-[1800px] bg-secondary ">
      <div className=" text-center py-9">
        <h1 className="text-white text-3xl font-semibold">SKILLS PAGE</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 md:px-4 md:py-3 py-[30px]">

      { 
        skillsData.map((data)=>(

          <div className="shadow-lg shadow-blue-500/50 rounded-md md:w-1/4 md:h-1/2 md:mx-[100px] mx-5 ">
        
          
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
