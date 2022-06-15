import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <Link to="/playing">Play</Link>
      </div>
    </HomeContainer>
  );
};

export default Home;
