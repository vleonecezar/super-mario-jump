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
          <Link to="/" style={{ color: "#666", pointerEvents: "none" }}>
            RANKING
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: "#666", pointerEvents: "none" }}>
            ABOUT
          </Link>
        </li>
      </ul>
    </HomeContainer>
  );
};

export default Home;
