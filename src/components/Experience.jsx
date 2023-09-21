import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import "../index.css"

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
// import { exp } from "maath/dist/declarations/src/easing";

const ExperienceCard = ({ experience }) => {
  return (
      <VerticalTimelineElement
        iconClassName="icon-border"
        contentStyle={{background: '#b4927d', color: '#b4927d'}}
        contentArrowStyle={{borderRight: '7px solid #b4927d'}}
        date={experience.date}
        iconStyle={{background: experience.iconBg}}
        icon={
          <div className="flex justify-center items-center w-full h-full custom-icon"> 
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"/>
          </div>
        }
        >
          <div>
            <h3 className="text-coffee-300 text-[24px] font-bold">{experience.title}</h3>
            <p className="text-coffee-300 text-[16px] font-semibold" style={{margin: 0}}>
              {experience.company_name}</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-coffee-100 text-[14px] pl-1 tracking-wider">
                  {point}
                </li>
            ))}
          </ul>
      </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          animate={true}
          lineColor="#b4927d"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
