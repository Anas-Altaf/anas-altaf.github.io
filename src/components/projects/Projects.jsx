import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    pName: "Neurl-PS Scrapper",
    desc: "A robust scrapper for https://nips.papers.cc , it could be helpful if you are a researcher and data scientist or you need to train your LLMs",
    img: "/assets/images/blog/blog-1.webp",
    images: [
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
    ],
    icons: ["python", "jupyter", "pandas", "streamlit", "git", "pycharm"],
    category: "Data Science in AI and ML",
    link: "https://github.com/Anas-Altaf",
    content:
      "it could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMs.",
  },
  {
    pName: "Neurl-PS Scrapper",
    desc: "A robust scrapper for https://nips.papers.cc , it could be helpful if you are a researcher and data scientist or you need to train your LLMs",
    img: "/assets/images/blog/blog-1.webp",
    images: [
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
    ],
    icons: ["python", "jupyter", "pandas", "streamlit", "git", "pycharm"],
    category: "Data Science in AI and ML",
    link: "https://github.com/Anas-Altaf",
    content:
      "it could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMs.",
  },
  {
    pName: "Neurl-PS Scrapper",
    desc: "A robust scrapper for https://nips.papers.cc , it could be helpful if you are a researcher and data scientist or you need to train your LLMs",
    img: "/assets/images/blog/blog-1.webp",
    images: [
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
      "/assets/images/blog/blog-1.webp",
    ],
    icons: ["python", "jupyter", "pandas", "streamlit", "git", "pycharm"],
    category: "Data Science in AI and ML",
    link: "https://github.com/Anas-Altaf",
    content:
      "it could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMsit could be helpful if you are a researcher and data scientist or you need to train your LLMs.",
  },
];

const Projects = () => (
  <div className="flex flex-col items-center space-y-6 p-10 mx-auto max-w-4xl">
    {projects.map((project, idx) => (
      <ProjectCard key={idx} id={idx + 1} {...project} />
    ))}
  </div>
);

export default Projects;
