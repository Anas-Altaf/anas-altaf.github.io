import { useEffect, useState, useRef } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import Hero from "./components/header/Hero";
import ReposSlider from "./components/repos/ReposSlider";
import MainHeading from "./components/header/MainHeading";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/Footer";
import Skills from "./components/skills/Skills";
import ScrollToTop from "./components/effects/ScrollToTop";

const TRACKING_ID = "G-QCBYFJ1GR5";

function App() {
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const blogsRef = useRef(null);
  const aboutRef = useRef(null);
  const handleNavClick = (section) => {
    switch (section) {
      case "Home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Education":
        educationRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Blogs":
        blogsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Hero ref={homeRef} onNavClick={handleNavClick} />
      <MainHeading
        id="01"
        title="Respositories"
        description="Here is my code work, that I have touched so far"
        ref={educationRef}
      />
      <ReposSlider />
      <MainHeading
        id="02"
        title="Selected Work"
        description="Some selected projects that I have worked on"
        ref={projectsRef}
      />
      <Projects />
      {/* Skills Section */}
      <MainHeading
        title="Key Skills & Expertise"
        description="Learning Journey's key skills that helped me to develop myself and my expertise"
        ref={skillsRef}
      />

      <Skills />
      {/* Blog Section */}
      <MainHeading
        id="03"
        title="My Blogs"
        description="I like to write blogs, especially on Medium"
        ref={blogsRef}
      />
      <Blogs />
      {/* Footer */}
      <Footer ref={aboutRef} />
      <ScrollToTop />
    </>
  );
}

export default App;
