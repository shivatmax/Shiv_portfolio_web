import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
          {time}|{place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
         <Details
            type=" Full Stack LLM/NLP Developer "
            time="Jan 2024 - Present"
            place="M0 - METAVERSE VENTURES PRIVATE LIMITED"
            info="Experienced Full Stack LLM/NLP Developer, specialized in RAG, fine-tuning, and prompt engineering, with a proven track record in developing and optimizing language models for diverse applications. Skilled in integrating NLP technologies into full stack solutions, enhancing user interaction and data processing capabilities."
          />
         <Details
            type="AI/ML Lead "
            time="Aug 2023 - Present "
            place="GDSC - National Forensic Sciences University Delhi"
            info="I am excited to be the Google Developer Student Clubs AI/ML Lead at National Forensic Sciences University - Delhi. In this role, I will be responsible for starting and growing a community of students interested in Google developer technologies. I will also be organizing workshops and events to help students learn about these technologies and build their skills."
          />
          <Details
            type="AI and Python Instructor"
            time="June 2023 - Aug 2023"
            place="Rancho Labs IIT Delhi"
            info="Taught Machine Learning and AI courses to 200+ students, achieving high feedback for curriculum effectiveness. Experienced in teaching, evidenced by improved student outcomes. Proficient in Python, applied in projects from data visualization to machine learning."
          />
          <Details
            type="Cybersecurity Automation Expert"
            time="May 2023 - Jun 2023 "
            place="Bhumi iTech Pvt. Ltd."
            info="I had the incredible opportunity to work on an engaging project focused on deploying the SOAR (Security Orchestration, Automation, and Response) framework as a part of the Blue Team.Also worded on the automation of a  Wazuh, Hive, cortex, shuffle and Misp for the organization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
