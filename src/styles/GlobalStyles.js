import { createGlobalStyle } from "styled-components";

import font from "../assets/font.ttf";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "Game Font";
    src: url(${font});
  }

  a, p, span {
    font-family: "Game Font";
  }

  a {
    text-decoration: none;
    display: block;
    color: #fccf00;
    width: 160px;
    padding: 10px 12px;
    text-align: center;

    border: 2px solid #333;
    border-radius: 10px;
    background: #009cda;
  }

  @keyframes screenTransition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
