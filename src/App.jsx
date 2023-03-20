import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Licenses from "./pages/Licenses";
import Petroleum_Licenses from "./pages/Petroleum_Licenses";
import ApplicationDocumentsRetailer from "./pages/ApplicationDocumentsRetailer";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route
          path="/licenses/petroleum_licenses"
          element={<Petroleum_Licenses />}
        />
        <Route
          path="/licenses/petroleum_licenses/retailer"
          element={<ApplicationDocumentsRetailer />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
