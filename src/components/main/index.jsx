import React from "react";

import { MainContainer } from "./styled";

import mario_border_img from "../../assets/mario-border.png";

const Main = ({ children }) => {
  return (
    <MainContainer>
      <img src={mario_border_img} alt="mario jumping" />
      {children}
      <img src={mario_border_img} alt="mario jumping" />
    </MainContainer>
  );
};

export default Main;
