import React, { useEffect, useState } from "react";
import { fetchMediumArticles } from "../../api/medium";
import BlogImageCard from "./BlogImageCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const articles = await fetchMediumArticles("anasaltaf");
      setBlogs(articles);
    }
    loadBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-5 p-4">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogImageCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
