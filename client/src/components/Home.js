import React from "react";
import BlogList from "./blog/BlogList";
import DataProvider from "../context/getData";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[900px] justify-center ">
        <div className="h-full mt-3">
          <DataProvider>
            <BlogList />
          </DataProvider>
        </div>
      </div>
    </div>
  );
}

export default Home;
