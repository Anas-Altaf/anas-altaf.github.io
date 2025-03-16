import React from "react";

const MainHeading = ({ id, title, description }) => {
  return (
    <div className="pt-10 pb-5">
      <h2 className="text-2xl text-center">
        <span className="relative -top-1.5 -left-2 bottom-auto right-auto text-[0.8rem] font-light">
          {id}
        </span>
        {title}{" "}
      </h2>
      <p className="text-center font-light text-txt-desc text-sm">
        {description}
      </p>
    </div>
  );
};

export default MainHeading;
