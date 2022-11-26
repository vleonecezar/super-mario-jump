import styled from "styled-components";

import background from "../../assets/background.png"

export const MainContainer = styled.main`
width: 100vw;
height: 100vh;
background: url(${background}) no-repeat;
background-size: cover;
padding: 0 10px;
padding-top: 10px;
font-family: 'Main font';

& p {
    text-align: center;
    color: black;
    font-size: 1rem;
}
`

export const Logo = styled.img`
display: block;
max-width: 350px;
margin: 10px auto 20px;
`

export const MarioJump = styled.img`
    display: block;
    width: 180px;
    margin: 0 auto;
    padding-top: 30px;
`