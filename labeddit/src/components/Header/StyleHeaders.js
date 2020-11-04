import styled from "styled-components"

export const ContainerHeader = styled.header`
    background-color: black;
    color: white;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const LogoutButton = styled.button`
    background-color: #ff4500;
    width: 5%;
    height: 5vh;
    border-style: none;
    border-radius: 2px;
    margin-right: 5vw;
`

export const Logo = styled.h1`
    margin-left: 5vw;
    cursor: pointer;
`