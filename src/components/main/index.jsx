import React from "react";
import { MainContainer, Logo } from "./styled";

import logo from "../../assets/logo.png";
import mario from "../../assets/mario-border.png";

const Main = ({ children }) => {
  return (
    <MainContainer>
      <Logo src={logo} alt="logo" />
      <div>
        <img src={mario} alt="mario" />
        {children}
        <img src={mario} alt="mario" />
      </div>
      <p>
        DEVELOPED BY <span>VITOR CEZAR</span>
      </p>
    </MainContainer>
  );
};

export default Main;
