import { createGlobalStyle } from "styled-components";

import font from "../assets/font.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Game Font";
    src: url(${font});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a, p, span {
    font-family: "Game Font";
  }

  a {
    text-decoration: none;
  }
`;
