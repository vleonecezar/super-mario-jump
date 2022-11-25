import React from "react";
import { ScreenContainer } from "./styled";

function Screen({ children }) {
  return <ScreenContainer>{children}</ScreenContainer>;
}

export default Screen;
