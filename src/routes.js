import React from "react";
import { Route, Routes } from "react-router-dom";
import Playing from "./pages/playing";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Playing />} />
    </Routes>
  );
};

export default MainRoutes;
