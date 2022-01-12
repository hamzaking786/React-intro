import React from "react";
import styled from "styled-components";
import { backgroundcolor } from "../Styles/colors";

const NavbarStyled = styled.div`
  background-color: ${backgroundcolor};
  color: white;
  position: fixed;
  width: 100%;
  z-index: 11;
  font-family: 'Righteous', cursive; 
  text-align: center;
  font-size: 25px;
`;

export function Navbar() {
  return (
    <NavbarStyled>
    <h1>Pizzeria Bella</h1>
    </NavbarStyled>
  );
}
