import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

function Navbar({ onNavClick }) {
  let navItems = ["Home", "Projects", "Skills", "Blogs", "About"];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > 100); // Collapse when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center p-5 h-20 w-full top-0 left-0 right-0 z-50 bg-transparent">
      {/* Logo */}
      <div>
        <img
          className="h-15 w-15"
          src="/assets/images/personal-img-art.webp"
          alt="Anas Altaf Image as Logo"
        />
      </div>

      {/* Navigation Menu */}
      <div
        className={`hidden md:block  fixed top-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
          isCollapsed
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <ul className="flex flex-row justify-center items-center space-x-5 rounded-full bg-bg-p px-6 py-2 cursor-pointer border border-fg-s shadow-xs shadow-black/50">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => onNavClick(item)}
              className="cursor-pointer text-white font-medium hover:text-acc border-b-2 border-transparent hover:border-b-acc transition-all duration-200 ease"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Menu (Toggled) */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-bg-p shadow-md max-md:block md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onNavClick(item);
                setIsMobileMenuOpen(false);
              }}
              className="cursor-pointer text-white font-medium hover:text-acc transition-all duration-200 ease"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsed Nav Icon (Only in max-md) */}
      <div
        className="fixed z-50 top-5  max-md:bottom-6 max-md:left-6 max-md:top-auto left-1/3 transform -translate-x-1/2 w-12 h-12 bg-bg-p/80 rounded-full flex items-center justify-center cursor-pointer border border-fg-s transition-all duration-300 "
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars className="text-white text-xl" />
      </div>

      {/* Hire Me Button */}
      <div>
        <button className="text-white rounded-xl bg-transparent border-2 px-4 hover:border-transparent py-1 hover:bg-gradient-to-tl from-white to-acc border-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
          Hire me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
