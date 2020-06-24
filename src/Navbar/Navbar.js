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
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column; 
  }
`;

const Logo = styled(Title)`
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px 4px #380402;
`;

const UserState = styled.div`
  color: white;
  font-size: 14px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

const CartButton = styled.span`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export function NavBar({login, loggedIn, logout, toggleCart}) {
  return (
    <NavBarStyled>
      <Logo>Sliceline <span role="img" aria-label="pizza slice">🍕</span></Logo>
      <UserState>
        {loggedIn !== 'loading' ?
          <>
            {loggedIn ?
              <span style={{marginRight: '10px', fontWeight: 'bolder'}}>Welcome {loggedIn.displayName}</span> : ""}
            {loggedIn ? <CartButton onClick={() => toggleCart()}>Cart <span role="img" aria-label="shopping cart">🛒</span></CartButton> : ""}
            {loggedIn ? <LoginButton onClick={() => logout()}>Log Out</LoginButton> :
              <LoginButton onClick={() => login()}>Login / Sign Up</LoginButton>}
          </> : 'Loading ...'
        }
      </UserState>
    </NavBarStyled>
  )
}