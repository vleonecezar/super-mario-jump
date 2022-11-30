import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/home";
import Game from "./screens/game";

const GameRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default GameRoutes;
