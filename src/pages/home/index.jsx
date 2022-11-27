import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./styled";

import son from "../../assets/overworld.mp3";

const Home = () => {
  new Audio(son).pause();
  return (
    <HomeContainer>
      <ul>
        <li>
          <Link to="/playing">START</Link>
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
