import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../context/getData";

function BlogList({ blogs, title }) {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return "Loading...";
  const blog = data;

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
