import React, {useState} from 'react';
import {NavBar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {GlobalStyle} from "./Styles/GlobalStyle";
import {FoodDialog} from "./FoodDIalog/FoodDialog";
import {Order} from "./Order/Order";

function App() {
  const [openFood, setOpenFood] = useState(null);
  return (
    <>
      <GlobalStyle/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <NavBar/>
      <Order/>
      <Banner/>
      <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
