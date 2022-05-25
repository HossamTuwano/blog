import { useState } from "react";
import Create from "./components/blog/Create";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
