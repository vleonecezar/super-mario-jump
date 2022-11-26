import React from 'react'
import { MainContainer, Logo, MarioJump } from './styled'

import logo from "../../assets/logo.png"
import marioJump from "../../assets/mario-border.png"

const Main = ({children}) => {
return(
    <MainContainer>
        <Logo src={logo} alt="logo" />
        {children}
        <MarioJump src={marioJump} />
        <p>TAP SCREEN TO JUMP</p>
    </MainContainer>
)
}

export default Main