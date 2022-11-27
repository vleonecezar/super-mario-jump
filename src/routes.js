import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Playing from "./pages/playing";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playing" element={<Playing />} />
    </Routes>
  );
};

export default MainRoutes;
