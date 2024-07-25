import React, { useState } from "react";
import { CgAddR, CgRemoveR } from "react-icons/cg";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center box-border">
        <div
          className="rounded-md shadow-lg max-w-lg w-full overflow-hidden cursor-pointer"
          onClick={() => setActiveIndex(!activeIndex)}
        >
          <div className="p-4 h-20 w-full flex items-center justify-between bg-slate-700 ">
            <h1 className="text-white text-lg">What is Your Name ??</h1>
            <span className="text-xl text-white">
                {
                    activeIndex ? <CgRemoveR/> : <CgAddR/>
                }
              
              
            </span>
          </div>

          <div
            className={`grid w-full rounded-md transition-all duration-300 ease-in overflow-hidden ${
          activeIndex ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
          >
            <p className={`overflow-hidden ${activeIndex ? "p-3" : "p-0"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              delectus fugiat nam pariatur facere tenetur perspiciatis
              repudiandae! Deserunt placeat, magni quos aliquam eum dignissimos
              aperiam aut ut distinctio consectetur. Adipisci?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              delectus fugiat nam pariatur facere tenetur perspiciatis
              repudiandae! Deserunt placeat, magni quos aliquam eum dignissimos
              aperiam aut ut distinctio consectetur. Adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              delectus fugiat nam pariatur facere tenetur perspiciatis
              repudiandae! Deserunt placeat, magni quos aliquam eum dignissimos
              aperiam aut ut distinctio consectetur. Adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              delectus fugiat nam pariatur facere tenetur perspiciatis
              repudiandae! Deserunt placeat, magni quos aliquam eum dignissimos
              aperiam aut ut distinctio consectetur. Adipisci?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
