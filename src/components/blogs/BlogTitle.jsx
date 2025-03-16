import React from "react";

const BlogTitle = ({ id, title, description }) => {
  let boldWord = title.split(" ")[0] || "";
  // test after 1st word
  let remaingTitle = title.split(" ").slice(1).join(" ") || "";
  return (
    <div>
      <h2 className="text-lg text-left">
        <span className="relative bottom-0 -left-0.5  right-auto text-[0.7rem] font-light">
          {id > 10 ? id : `0${id}`}
        </span>
        <span className="font-medium">{boldWord}</span>
        <span className="font-light"> {remaingTitle}</span>
      </h2>
      <p className="text-center font-light text-txt-desc text-sm">
        {description || ""}
      </p>
    </div>
  );
};

export default BlogTitle;
