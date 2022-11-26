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
`;

export const Logo = styled.img`
  display: block;
  max-width: 350px;
  margin: 10px auto 20px;
`;
