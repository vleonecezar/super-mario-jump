import { createGlobalStyle } from "styled-components";

import background_img from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${background_img}) center fixed no-repeat;
    background-size: cover;
  }

  a {
    text-decoration: none;
  }
`;
