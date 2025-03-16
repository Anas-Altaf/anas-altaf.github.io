import React from "react";

const MainHeading = ({ id, title, description }) => {
  let titleLastWord = title.split(" ").slice(-1);
  // text before last word
  let titleFirstWords = title.split(" ").slice(0, -1).join(" ");
  return (
    <div className="pt-10 pb-5">
      <h2 className="text-2xl text-center">
        <span className="relative -top-1.5 -left-2 bottom-auto right-auto text-[0.8rem] font-light">
          {id}
        </span>
        <span className="font-light">{titleFirstWords}</span>
        <span className="font-medium"> {titleLastWord}</span>
      </h2>
      <p className="text-center font-light text-txt-desc text-sm">
        {description || ""}
      </p>
    </div>
  );
};

export default MainHeading;
