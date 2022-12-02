import React from "react";
import { Link } from "react-router-dom";
import { AboutContainer } from "./styled";

const About = () => {
  return (
    <AboutContainer>
      <div>
        <p>
          My name is Vitor Leone Cezar. I developed this browser game inspired
          by Super Mario which was a game that I've been played when I was a kid
          and it gave me lots of happy moments.
        </p>
        <p>
          With focus and study I made my own Mario game and one of my childhood
          dreams came true.
        </p>
      </div>
      <div>
        <Link to="/">MENU</Link>
      </div>
    </AboutContainer>
  );
};

export default About;
