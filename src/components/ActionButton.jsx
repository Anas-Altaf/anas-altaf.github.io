import React from "react";

const ActionButton = ({ text, icon, onClick, colored }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        (colored
          ? "text-black bg-gradient-to-r from-white hover:to-acc to-gray-300 hover:bg-gradient-to-tl group "
          : " text-white ") +
        " font-medium rounded-xl  pl-4 pr-3 py-1.5 text-center me-2 mb-2 transition-all duration-300 ease"
      }
    >
      {text}
      <i
        className={`inline ml-2 group-hover:animate-bounce fa-duotone fa-solid fa-${icon}`}
      ></i>
    </button>
  );
};

export default ActionButton;
