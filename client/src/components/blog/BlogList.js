import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogList({ blogs, title }) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const res = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts", {
          method: "get",
          headers: { "Content-Types": "application/json" },
        });

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };

    res();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center ">
        <h2>{title}</h2>
        {blog.map((blog) => (
          <div key={blog._id} className="border w-[600px] h-[90px] mb-3 ">
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {blog.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
