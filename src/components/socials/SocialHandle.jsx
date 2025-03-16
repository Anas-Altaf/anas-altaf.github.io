import React from "react";

const SocialHandle = ({ iconName, link }) => {
  return (
    <a href={link} target="_blank">
      <button className="border-b-2 border-transparent hover:border-b-acc hover:border-b-2">
        <i
          className={`text-2xl hover:text-gray-200 cursor-pointer rounded-xl fa-brands fa-${iconName}`}
        ></i>
      </button>
    </a>
  );
};

export default SocialHandle;
