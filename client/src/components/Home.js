import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./blog/BlogList";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[900px] justify-center ">
        <div className="h-full mt-3">
          <BlogList />
        </div>
      </div>
    </div>
  );
}

export default Home;
