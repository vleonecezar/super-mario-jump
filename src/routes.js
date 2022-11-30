import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/home";
import Game from "./screens/game";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default MainRoutes;
