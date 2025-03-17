import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center 
                 bg-fg-p transition-all duration-300 shadow-md hover:scale-105 ${
                   isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                 }`}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Full Circular Progress Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
          <circle
            className="stroke-gray-700"
            cx="18"
            cy="18"
            r="16"
            strokeWidth="2"
            fill="none"
          />
          <circle
            className="stroke-green-400 transition-all duration-200"
            cx="18"
            cy="18"
            r="16"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={100 - scrollPercentage}
            transform="rotate(-90 18 18)"
          />
        </svg>

        {/* Arrow Icon */}
        <FaArrowUp className="text-white text-lg" />
      </div>
    </button>
  );
};

export default ScrollToTop;
