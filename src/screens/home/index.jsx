import React from "react";
import { Link } from "react-router-dom";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <ul>
        <li>
          <Link to="/game">START</Link>
        </li>
        <li>
          <Link to="/">RANKING</Link>
        </li>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
      </ul>
    </HomeContainer>
  );
};

export default Home;
