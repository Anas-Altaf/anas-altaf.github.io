import React from "react";
import SkillCard from "./SkillCard";
import MainHeading from "../header/MainHeading";
const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Teamwork",
  "Adaptability",
  "Communication",
  "Quick Learning",
  "New Tech Enthusiast",
];
const skillsData = [
  {
    title: "Frontend Development",
    description:
      "Skilled in creating dynamic UIs using React, Flutter, Streamit, Swing, Gardio, Next.js, and Wnforms.",
  },
  {
    title: "AI and Automation",
    description:
      "Proficient in task automation with Python, Selenium, and AI tools like Socialbots, make.com, and nodemation.",
  },
  {
    title: "Backend Development",
    description:
      "Experienced in building robust backends using Django, Flask, FastApi, Nextjs, and the MERN stack.",
  },
  {
    title: "Data Scraping and Analysis",
    description:
      "Skilled in web scraping with Selenium and Scrapy, performing annotations, plotting data, and using Power BI, Streamlit, and LLMs for insights.",
  },
];
const Skills = () => {
  return (
    <section className="text-white pb-3 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Soft Skills Pills */}
        <div className="mt-4 flex justify-center flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-0.5 bg-acc/5 border-1 border-acc text-white rounded-full text-sm font-light"
            >
              {skill}
            </span>
          ))}
        </div>
        {/* Skills Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
