import React from "react";
import { Link } from "react-router-dom";
import { AboutContainer } from "./styled";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <p>
          This is a browser game developed by me, Vitor Cezar. I made this game
          inspired by Super Mario which was a game that I've been played when I
          was a kid and it gave me lots of happy moments.
        </p>
        <p>
          With my own effort and study I made a game and another dream came
          true. Have fun!
        </p>
      </div>
      <div>
        <Link to="/">MENU</Link>
      </div>
    </AboutContainer>
  );
};

export default About;
