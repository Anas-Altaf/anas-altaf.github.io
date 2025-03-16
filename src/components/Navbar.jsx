import React from "react";

function Navbar() {
  let navItems = ["Home", "About", "Projects", "Contact"];
  return (
    <div className="flex flex-row justify-between items-center p-5 h-20 w-full">
      <div>
        <img
          className="h-15 w-15"
          src="\assets\images\personal-img-art.webp"
          alt="Anas Altaf Image as Logo"
        />
      </div>
      <div className="hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-45">
        <ul className="flex flex-row justify-center items-center space-x-5 rounded-xl bg-bg-p px-6 py-2 cursor-pointer">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white font-medium hover:text-acc border-b-2 border-transparent hover:border-b-acc hover:border-b-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="text-white rounded-xl bg-transparent border-2 px-4  hover:border-transparent py-1 hover:bg-gradient-to-tl from-white to-acc border-white cursor-pointer hover:bg-white hover:text-black  transition-all duration-300">
          Hire me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
