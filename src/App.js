import React from 'react';
import {createGlobalStyle} from "styled-components";
import {NavBar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body {
   font-family: 'Open Sans', sans-serif;
   margin: 0;
  }
  h1,h2,h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Banner/>
      <Menu/>
      Hello Sliceline
    </>
  );
}

export default App;
