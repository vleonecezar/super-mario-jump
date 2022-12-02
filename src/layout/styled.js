import styled from "styled-components";

import background from "../assets/background.png";

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0 10px;
  align-items: center;

  background: url(${background}) no-repeat;
  background-size: cover;

  > div {
    width: 100%;
    max-width: 1200px;
  }

  > p {
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 0.6rem;
    color: red;

    > span {
      color: blue;
    }
  }

  @media (min-width: 900px) {
    > div {
      display: flex;
      align-items: center;
      margin: 0 auto;
    }

    > p {
      padding-top: 30px;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 330px;
  padding: 20px 0;

  @media (min-width: 900px) {
    max-width: 500px;
  }
`;

export const Mario = styled.img`
  display: block;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 10px 0;

  &:first-child {
    display: none;
  }

  @media (min-width: 900px) {
    max-width: 200px;

    &:first-child {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    max-width: 240px;
  }
`;
