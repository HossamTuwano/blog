import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-center">
      <div className="border-b border-black w-[900px] flex justify-between mt-2 ">
        <Link to="/posts" className="capitalize">
          movie reviews
        </Link>

        <div className="flex">
          <Link to="/posts" className="capitalize mr-2">
            Feeds
          </Link>
          <Link to="/add-post" className="capitalize">
            new post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
