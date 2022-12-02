import styled from "styled-components";

import background_game from "../../assets/background_game.webp";

export const GameContainer = styled.div`
  background: url(${background_game}) center no-repeat;
  background-size: cover;

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 300px;
  border: 5px solid blue;
  border-radius: 8px;
  box-shadow: inset 0px -7px #ca945d;
  position: relative;
  overflow: hidden;

  animation: screenTransition 1s;

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

export const Clouds = styled.img`
  width: 100%;
  max-width: 340px;
  position: absolute;
  top: 10px;

  filter: opacity(90%);

  animation: cloudsAnimation 60s infinite linear;

  @keyframes cloudsAnimation {
    from {
      left: 100vw;
    }
    to {
      left: -100vw;
    }
  }

  @media (min-width: 480px) {
    @keyframes cloudsAnimation {
      from {
        left: 36vw;
      }
      to {
        left: -25vw;
      }
    }
  }
`;

export const Bushes = styled.img`
  width: 100%;
  max-width: 323.2px;

  position: absolute;
  bottom: 2px;

  animation: bushesAnimation 4.5s infinite linear;

  @keyframes bushesAnimation {
    from {
      left: 150vw;
    }
    to {
      left: -100vw;
    }
  }

  @media (min-width: 480px) {
    max-width: 280px;

    animation-duration: 4s;

    @keyframes bushesAnimation {
      from {
        left: 50vw;
      }
      to {
        left: -20vw;
      }
    }
  }
`;

export const Bullet = styled.img`
  width: 100%;
  max-width: 70px;
  position: absolute;
  bottom: 10px;

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
  bottom: 1px;
  left: 50px;

  z-index: 200;

  //Only triggers animation if jump state is true
  animation: ${({ jump }) => (jump ? "jump_animation 0.9s ease-out" : "none")};

  @keyframes jump_animation {
    50% {
      bottom: 200px;
    }
    100% {
      bottom: 1px;
    }
  }

  @media (max-width: 480px) {
    max-width: 25px;

    @keyframes jump_animation {
      50% {
        bottom: 160px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;
