import styled from "styled-components";

import background_playing from "../../assets/background-playing.webp";

export const PlayingContainer = styled.div`
  background: url(${background_playing}) center no-repeat;
  background-size: cover;

  height: 300px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 5px solid blue;
  border-radius: 8px;
  box-shadow: inset 0px -7px #ca945d;

  position: relative;

  overflow: hidden;

  animation: screen_transition 1s; //0.5

  @keyframes screen_transition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    font-family: "Main font";
    position: relative;
    z-index: 100;
    display: block;
    padding: 5px 0 0 5px;

    color: black;
    font-size: 0.7em;
    font-weight: bolder;
    position: relative;
    z-index: 300;
  }

  .game-over {
    display: block;
    font-size: 1.8em;
    color: red;
    //position: absolute;
    //left: 140px;
    text-align: center;
    opacity: 0;
    top: 80px;
    text-shadow: 2px 2px black;

    animation: gameover_animation 3s forwards;
    animation-delay: 1.5s;

    @keyframes gameover_animation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .clouds {
    width: 100%;
    max-width: 340px;
    filter: opacity(90%);

    position: absolute;
    top: 10px;

    animation: clouds_animation 25s infinite linear;

    @keyframes clouds_animation {
      from {
        left: 600px;
      }
      to {
        left: -400px;
      }
    }
  }

  .bushes {
    width: 100%;
    max-width: 323.2px; // Desktop:404

    position: absolute;
    bottom: 2px;

    animation: bushes_animation 4s infinite linear;

    @keyframes bushes_animation {
      from {
        left: 800px;
      }
      to {
        left: -400px;
      }
    }
  }

  .mario {
    width: 100%;
    max-width: 32px; //Desktop:40

    position: absolute;
    bottom: 1px;
    left: 50px; //50

    z-index: 200;
  }

  .dying {
    max-width: 35px;

    animation: dying_animation 1s forwards !important;
    animation-delay: 1s !important;

    @keyframes dying_animation {
      0% {
        bottom: ${({ playerPosition }) => `${playerPosition}px`};
      }
      50% {
        bottom: ${({ playerPosition }) => `${playerPosition + 100}px`};
      }
      100% {
        bottom: -80px;
      }
    }
  }

  .jump {
    animation: jump_animation 0.9s ease-out;

    @keyframes jump_animation {
      0% {
        bottom: 0;
      }
      50% {
        bottom: 200px;
      }
      100% {
        bottom: 0;
      }
    }
  }

  .bullet {
    width: 100%;
    max-width: 98px;

    position: absolute;
    bottom: 10px; // 10

    z-index: 100;

    animation: bullet_animation 2.3s infinite linear; //desktop: 2s

    @keyframes bullet_animation {
      from {
        left: 800px;
      }
      to {
        left: -400px;
      }
    }
  }

  @media (max-width: 480px) {
    .mario {
      max-width: 25px;
    }

    .dying {
      max-width: 28px;
    }

    .bullet {
      max-width: 70px;

      animation: bullet_animation 2.5s infinite linear;
    }

    .bushes {
      max-width: 280px;
    }

    @keyframes jump_animation {
      0% {
        bottom: 0;
      }
      50% {
        bottom: 160px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;
