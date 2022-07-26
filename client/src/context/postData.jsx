import { createContext } from "react";

const postData = {
  author: "",
  title: "",
  body: "",
  images: [],
};

export const postContext = createContext({ postData });
