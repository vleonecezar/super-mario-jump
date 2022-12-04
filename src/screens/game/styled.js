import styled from "styled-components";

import background_game from "../../assets/background_game.png";
import ground_img from "../../assets/ground.png";

export const GameContainer = styled.div`
  background: url(${background_game}) repeat-x;
  background-size: contain;

  width: 100%;
  max-width: 600px;
  min-width: 371px;
  margin: 0 auto;
  height: 300px;
  border: 5px solid blue;
  border-radius: 8px;
  box-shadow: inset 0px -7px #ca945d;
  position: relative;
  overflow: hidden;
  //background-position: -343px -30px;

  animation: screenTransition 1s;
  animation: backgroundAnimation 4s infinite linear;

  @keyframes backgroundAnimation {
    from {
      background-position: 0px -17px;
    }
    to {
      background-position: -343px -17px;
    }
  }

  @keyframes screenTransition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    position: relative;
    display: block;
  }

  .mario_dead {
    max-width: 35px;

    animation: deadAnimation 1s forwards !important;
    animation-delay: 0.5s !important;

    @keyframes deadAnimation {
      50% {
        bottom: 150px;
      }
      100% {
        bottom: -80px;
      }
    }

    @media (max-width: 480px) {
      max-width: 28px;
    }
  }
`;

export const Ground = styled.div`
  background: url(${ground_img}) repeat-x;
  background-size: cover;
  width: 100%;
  max-width: 600px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  background-position: -1203px bottom;

  animation: groundAnimation 4s infinite linear;

  @keyframes groundAnimation {
    from {
      background-position: 0 bottom;
    }
    to {
      background-position: -1203px bottom;
    }
  }
`;

export const Score = styled.span`
  font-size: 0.7em;
  color: black;
  font-weight: bolder;
  text-transform: uppercase;
  padding: 5px 0 0 5px;
  z-index: 300;
`;

export const GameOver = styled.span`
  font-size: 1.8em;
  color: red;
  text-shadow: 2px 2px black;
  text-align: center;
  text-transform: uppercase;

  z-index: 300;

  opacity: 0;

  top: 80px;

  animation: gameOverAnimation 2s forwards;
  animation-delay: 1s;

  @keyframes gameOverAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Bullet = styled.img`
  width: 100%;
  max-width: 70px;
  position: absolute;
  bottom: 25px;

  z-index: 100;

  animation: bulletAnimation 2.5s infinite linear;

  @keyframes bulletAnimation {
    from {
      left: 200vw;
    }
    to {
      left: -20vw;
    }
  }

  @media (min-width: 480px) {
    max-width: 98px;

    @keyframes bulletAnimation {
      from {
        left: 60vw;
      }
      to {
        left: -20vw;
      }
    }
  }
`;

export const Mario = styled.img`
  width: 100%;
  max-width: 32px;
  position: absolute;
  bottom: 17px;
  left: 50px;

  z-index: 200;

  //Only triggers animation if jump state is true
  animation: ${({ jump }) => (jump ? "jump_animation 0.9s ease-out" : "none")};

  @keyframes jump_animation {
    50% {
      bottom: 200px;
    }
    100% {
      bottom: 17px;
    }
  }

  @media (max-width: 480px) {
    max-width: 25px;

    @keyframes jump_animation {
      50% {
        bottom: 160px;
      }
      100% {
        bottom: 17px;
      }
    }
  }
`;
