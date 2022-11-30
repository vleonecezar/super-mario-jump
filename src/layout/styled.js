import styled from "styled-components";

import background from "../assets/background.png";

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0 10px;
  padding-top: 10px;

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
      padding-bottom: 50px;
      margin: 0 auto;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;

  @media (min-width: 900px) {
    max-width: 500px;
  }
`;

export const Mario = styled.img`
  display: block;
  width: 100%;
  max-width: 270px;
  padding: 20px;
  margin: 0 auto;

  &:first-child {
    display: none;
  }

  @media (min-width: 900px) {
    max-width: 200px;
    padding: 0 5px;
    margin: 0;

    &:first-child {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    max-width: 240px;
  }
`;
