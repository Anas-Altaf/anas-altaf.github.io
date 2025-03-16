import React from "react";

const ActionButton = ({ text, icon, onClick, colored, link , css}) => {
  return (
    <a href={link || "#"} target="_blank" rel="noopener noreferrer">
      <button
        onClick={onClick}
        type="button"
        className={
          (colored
            ? "text-black bg-gradient-to-r from-white hover:to-acc to-gray-300 hover:bg-gradient-to-tl group "
            : " text-white ") +
          " font-medium rounded-xl  pl-4 pr-3 py-1.5 text-center  transition-all duration-300 ease " + css
        }
      >
        {text}
        <i
          className={`inline ml-2 group-hover:animate-bounce fa-duotone fa-solid fa-${icon}`}
        ></i>
      </button>
    </a>
  );
};

export default ActionButton;
