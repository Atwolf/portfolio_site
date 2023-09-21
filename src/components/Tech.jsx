import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-16 bg-coffee-300 flex-[0.75] p-20 rounded-2xl'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="flex w-max mx-auto mt-4 text-coffee-600 text-[17px] max-w-3xl leading-[30px] hover:text-white">
          {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");
