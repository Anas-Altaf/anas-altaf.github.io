import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import if using routing
import ReactGA from "react-ga4";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Swiper from "swiper";
import ReposSlider from "./components/ReposSlider";
import MainHeading from "./components/MainHeading";
import Projects from "./components/projects/Projects";

const TRACKING_ID = "G-QCBYFJ1GR5"; // Replace with your actual GA ID

function App() {
  const location = useLocation(); // Get current route (useful for tracking page views)

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Initialize GA once
  }, []);

  useEffect(() => {
    if (ReactGA.isInitialized()) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location.pathname]); // Track page changes in SPA

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
    </>
  );
}

export default App;
