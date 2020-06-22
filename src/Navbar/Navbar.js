import React from "react";
import styled from "styled-components";
import {pizzaRed} from "../Styles/colors";
import {Title} from "../Styles/title";

const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;

`;

const Logo = styled(Title)`
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px 4px #380402;
`;

export function NavBar() {
  return (
    <NavBarStyled>
      <Logo>Sliceline <span role="img" aria-label="pizza">🍕</span></Logo>
    </NavBarStyled>
  )
}