import React from "react";

const SkillCard = ({ title, description }) => {
  return (
    <div
      className=" bg-fg-p bg-gradient-to-r from-fg-s/50 to-fg-p/50 hover:bg-gradient-to-tl hover:border-acc rounded-xl p-6 h-42.5 flex flex-col justify-evenly items-start space-y-1 border-1 border-fg-s hover:transform hover:-translate-y-1 transition-all duration-300  overflow-hidden
        shadow-md group shadow-black/50"
    >
      <div className="flex items-center gap-2">
        <span className="text-acc text-xl">
          <i className="fa-solid fa-circle-check bg-transparent rounded-full shadow-acc shadow-xl"></i>
        </span>

        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-txt-desc text-sm mt-2">{description}</p>
    </div>
  );
};

export default SkillCard;
