import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import Hero from "./components/Hero";
import ReposSlider from "./components/ReposSlider";
import MainHeading from "./components/MainHeading";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/Footer";

const TRACKING_ID = "G-QCBYFJ1GR5";

function App() {
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <Hero />
      <MainHeading
        id="01"
        title="Respositories"
        description="Here is my code work, that I have touched so far"
      />
      <ReposSlider />
      <MainHeading
        id="02"
        title="Selected Work"
        description="Some selected projects that I have worked on"
      />
      <Projects />
      {/* Blog Section */}
      <MainHeading
        id="03"
        title="My Blogs"
        description="I like to write blogs, especially on Medium"
      />
      <Blogs />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
