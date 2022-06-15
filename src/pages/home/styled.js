import styled from "styled-components";

import background_home from "../../assets/background-home.jpg";

export const HomeContainer = styled.div`
  background: url(${background_home}) center no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;

  border: 1px solid black;

  animation: screen_transition 0.5s;

  @keyframes screen_transition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    height: 100%;

    a {
      border: 2px solid black;
      border-radius: 5px;

      padding: 5px 0;
      width: 160px;

      background-color: #009cda;

      font-size: 1.5em;
      color: black;
      text-align: center;

      margin-right: 50px;

      transition: filter animation 0.3s;

      &:hover {
        animation: btn_animation 0.3s infinite linear;
        filter: brightness(90%);
      }

      @keyframes btn_animation {
        0% {
          transform: rotate(0);
        }
        25% {
          transform: rotate(2deg);
        }
        50% {
          transform: rotate(0);
        }
        75% {
          transform: rotate(-2deg);
        }
        100% {
          transform: rotate(0);
        }
      }
    }
  }
`;
