import { createGlobalStyle } from "styled-components";
import font from "../assets/font.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Main font";
    src: url(${font});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
