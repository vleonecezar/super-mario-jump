import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Game from "./pages/game";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default MainRoutes;
