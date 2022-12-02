import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./screens/home";
import Game from "./screens/game";
import About from "./screens/about";

const GameRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default GameRoutes;
