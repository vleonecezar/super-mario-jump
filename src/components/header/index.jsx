import React from "react";

import { HeaderContainer } from "./styled";

import logo_img from "../../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo_img} alt="logo" />
    </HeaderContainer>
  );
};

export default Header;
