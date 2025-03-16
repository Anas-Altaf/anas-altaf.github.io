import React from "react";
import ActionButton from "../ActionButton";
import MainHeading from "../MainHeading";
import BlogTitle from "./BlogTitle";

const BlogImageCard = ({ blog }) => {
  console.log(blog, "blog");
  return (
    <div className=" border-1 hover:border-acc transition-border duration-200 ease border-fg-s rounded-xl shadow-sm shadow-black ">
      <div
        className="relative rounded-xl  h-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute bottom-0 right-0 bg-bg-p p-1 pb-0 inline-block rounded-tl-xl ">
          <ActionButton
            css=""
            colored={true}
            text="Explore it"
            link={blog.link}
            icon={"up-right-from-square"}
          />
        </div>
      </div>

      <div className="relative w-full  rounded-xl overflow-hidden  p-0.5">
        <div className="p-4">
          <h2 className="text-xl mb-1 font-semibold">
            <BlogTitle title={blog.title} id={blog.id} />
          </h2>
          <p className="text-gray-600 text-[0.8rem]">
            by{" "}
            <a
              href={blog.url}
              target="_blank"
              className=" underline italic text-zinc-500"
            >
              {blog.author}
            </a>{" "}
          </p>
          <p className="text-gray-600 text-[0.7rem] font-light">
            {blog.date.split(" ").join(" • ")}
          </p>
          <p className="mt-2 text-txt-desc font-light text-sm line-clamp-4">
            {blog.desc}{" "}
          </p>
          <a
            href={blog.link}
            target="_blank"
            className="mt-3 text-sm inline text-fg-s"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogImageCard;
