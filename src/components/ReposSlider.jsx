import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getGithubRepos } from "../api/github";
import RepoCard from "./RepoCard";

const ReposSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 10000, // Transition duration (10 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 0, // Continuous autoplay
    cssEase: "linear",
    pauseOnHover: true, // Optional: pauses on hover
    draggable: true, // Enable dragging on desktop
    swipeToSlide: true, // Allows swipe to any slide
    swipe: true, // Allows swipe to any slide
    touchMove: true, // Allows touch to move
    focusOnSelect: true, // Focus on slide when clicked
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // States
  const [githubData, setGithubData] = useState([]);

  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
    { id: 5, content: "Slide 5" },
    { id: 6, content: "Slide 6" },
  ];

  async function fetchGithubRepos() {
    let repos = await getGithubRepos();
    setGithubData(repos);
    // console.log(repos);
  }

  useEffect(() => {
    fetchGithubRepos();
  }, []);
  return (
    <div className="slider-container overflow-hidden  ">
      <Slider {...settings}>
        {githubData &&
          githubData.map((repo) => <RepoCard key={repo.id} {...repo} />)}
      </Slider>
    </div>
  );
};

export default ReposSlider;
