import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [post, setPost] = useState({
    title: "",
    author: "hossam",
    body: "",
  });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const result = Object.assign(post);

    const blog = async () => {
      try {
        const res = await fetch("http://localhost:5000/add-post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result),
        }).then(() => {
          setIsPending(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    blog();
    console.log(post);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[750px] mt-20">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <div className="">
              <input
                type="text"
                required
                value={post.title}
                name="title"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Title"
                className="border-0 outline-none placeholder-gray-500 text-5xl"
              />
            </div>

            <div className="mt-1">
              <textarea
                required
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                className="resize-none px-2 py-3"
                rows={10}
                cols={100}
              />
            </div>
          </div>

          {/* <label>Blog author:</label>
          <select
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
          >
            <option value={post.author}>{post.author}</option>
          </select> */}
          {!isPending && (
            <div className="bg-green-400 w-[80px]  h-6 rounded-xl">
              <button className="border-0 w-[80px] h-full text-white">
                Add Blog
              </button>
            </div>
          )}
          {/* {isPending && <button disabled>Adding Blog</button>} */}
        </form>
      </div>
    </div>
  );
}

export default Create;
