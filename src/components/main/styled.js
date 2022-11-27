import styled from "styled-components";

import background from "../../assets/background.png";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;
  padding: 0 10px;
  padding-top: 10px;
  font-family: "Main font";
  display: flex;
  flex-direction: column;

  > p {
    font-size: 0.6rem;
    text-align: center;
    color: red;

    > span {
      color: blue;
    }
  }

  > div {
    width: 100%;
    max-width: 1300px;
    > img {
      display: block;
      margin: 0 auto;
      padding: 20px;
      width: 100%;
      max-width: 270px;

      &:first-child {
        display: none;
      }
    }
  }

  @media (min-width: 900px) {
    > div {
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding-bottom: 50px;

      > img {
        margin: 0;
        padding: 0;
        max-width: 200px;

        &:first-child {
          display: block;
          transform: rotateY(190deg);
        }
      }
    }
  }

  @media (min-width: 1100px) {
    > div {
      display: flex;
      align-items: center;
      margin: 0 auto;

      > img {
        margin: 0;
        padding: 0;
        max-width: 250px;

        &:first-child {
          display: block;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 350px;
  margin: 10px auto 20px;

  @media (min-width: 900px) {
    max-width: 500px;
  }
`;
