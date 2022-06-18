import styled from "styled-components";

import background_playing from "../../assets/background-playing.webp";

export const PlayingContainer = styled.div`
  background: url(${background_playing}) center no-repeat;
  background-size: cover;

  height: 100%;
  border-bottom: 11px solid #ca945d;
  box-shadow: inset 0px -2px #04ce3b;
  position: relative;

  overflow: hidden;

  animation: screen_transition 0.5s;

  @keyframes screen_transition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    position: relative;
    z-index: 100;
    display: block;
    padding: 5px 0 0 5px;

    color: black;
    font-size: 1.1em;
    font-weight: bolder;
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
    max-width: 404px;

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
    max-width: 40px;

    position: absolute;
    bottom: 0px;
    left: 50px;

    z-index: 200;
  }

  .dying {
    max-width: 45px;
  }

  .jump {
    animation: jump_animation 1s ease-out;

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
    max-width: 140px;

    position: absolute;
    bottom: 10px;

    z-index: 100;

    animation: bullet_animation 2s infinite linear;

    @keyframes bullet_animation {
      from {
        left: 800px;
      }
      to {
        left: -400px;
      }
    }
  }
`;
