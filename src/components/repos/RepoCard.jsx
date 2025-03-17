import React from "react";

function RepoCard({ id, category, name, description, link, icon }) {
  // console.log(category);
  return (
    <div className="py-4 px-2 ">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className=" bg-fg-p bg-gradient-to-r from-fg-s/50 to-fg-p/50 hover:bg-gradient-to-tl hover:border-acc rounded-xl p-6 h-42.5 flex flex-col justify-evenly items-start space-y-1 border-1 border-fg-s hover:transform hover:-translate-y-1 transition-all duration-300 
        shadow-md group shadow-black/50"
      >
        <p className="text-2xl font-extralight">{id < 10 ? "0" + id : id}</p>
        <div className="flex flex-row items-center justify-between w-full  ">
          <div className="space-x-0.5">
            {category.slice(0, 2).map((item, index) => (
              <span
                key={index}
                className="text-white font-extralight bg-bg-p text-[0.5rem] rounded-full px-2 pb-1 pt-0.5 text-center align-middle  "
              >
                {item}
              </span>
            ))}
          </div>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
            alt={icon + " language icon"}
            className="h-7 w-7"
          />
        </div>
        <div>
          <h1 className="text-white text-[0.8rem] font-light">{name}</h1>
          <p className=" font-light text-[0.6rem] text-txt-desc overflow-hidden ">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default RepoCard;
