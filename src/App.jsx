import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Licenses from "./pages/Licenses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
