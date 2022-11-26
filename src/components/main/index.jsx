import React from "react";
import { MainContainer, Logo } from "./styled";

import logo from "../../assets/logo.png";

const Main = ({ children }) => {
  return (
    <MainContainer>
      <Logo src={logo} alt="logo" />
      {children}
    </MainContainer>
  );
};

export default Main;
