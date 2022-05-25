import React from "react";
import { useParams, useHistory } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useHistory("http://localhost:5000/posts/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
};

export default BlogDetails;
