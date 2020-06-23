import React from 'react';
import {NavBar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {GlobalStyle} from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Banner/>
      <Menu/>
    </>
  );
}

export default App;
