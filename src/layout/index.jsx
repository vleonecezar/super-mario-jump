import React from "react";

import { LayoutContainer, Logo, Mario } from "./styled";

import logo_img from "../assets/logo.png";
import mario_background_img from "../assets/mario_background.png";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Logo src={logo_img} alt="logo" />
      <div>
        <Mario src={mario_background_img} alt="mario" />
        {children}
        <Mario src={mario_background_img} alt="mario" />
      </div>
      <p>
        DEVELOPED BY <span>VITOR CEZAR</span>
      </p>
    </LayoutContainer>
  );
};

export default Layout;
