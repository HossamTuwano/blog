import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [post, setPost] = useState({
    title: "",
    author: "hossam",
    body: "",
    image: "",
  });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const result = Object.assign(post);

    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("auther", post.author);
    formData.append("body", post.body);
    formData.append("image", post.image);

    const blog = async () => {
      try {
        const res = await fetch("http://localhost:5000/add-post", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        setPost(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    blog();
    console.log(post);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setPost({...post, image: e.target.files[0]})
  }

  return (
    <div className="flex justify-center">
      <div className="w-[750px] mt-20">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>

          <div className="">
              <input
                type="text"
                required
                value={post.author}
                name="author"
                onChange={handleChange}
                placeholder="author"
                className="border-0 outline-none placeholder-gray-500 text-5xl"
              />
            </div>
            <div className="">
              <input
                type="text"
                required
                value={post.title}
                name="title"
                onChange={handleChange}
                placeholder="Title"
                className="border-0 outline-none placeholder-gray-500 text-5xl"
              />
            </div>

            <div className="mt-1">
              <textarea
                required
                value={post.body}
                onChange={handleChange}
                className="resize-none px-2 py-3"
                name="body"
                rows={10}
                cols={100}
              />
            </div>

            <div>
              <input
                type="file"
                name="image"
                required
                onChange={handleImage}
              />
            </div>
          </div>

          {!isPending && (
            <div className="bg-green-400 w-[80px]  h-6 rounded-xl">
              <button className="border-0 w-[80px] h-full text-white">
                Add Blog
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Create;
