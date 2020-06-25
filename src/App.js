import React from 'react';
import {NavBar} from "./Navbar/Navbar";
import {Banner} from "./Banner/Banner";
import {Menu} from "./Menu/Menu";
import {GlobalStyle} from "./Styles/GlobalStyle";
import {FoodDialog} from "./FoodDIalog/FoodDialog";
import {Order} from "./Order/Order";
import {useOpenFood} from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";
import {useAuthentication} from "./Hooks/useAuthentication";
import {useCart} from "./Hooks/useCart";
import {OrderDialog} from "./Order/OrderDialog";
import {useOrderDialog} from "./Hooks/useOrderDialog";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const toggleCart = useCart();
  const orderDialog = useOrderDialog();

  useTitle({...openFood, ...orders});
  return (
    <>
      <GlobalStyle/>
      <OrderDialog {...orderDialog} {...orders}/>
      <FoodDialog {...toggleCart} {...openFood} {...orders}/>
      <NavBar {...auth} {...toggleCart}/>
      <Order {...orderDialog} {...toggleCart} {...auth} {...orders} {...openFood}/>
      <Banner/>
      <Menu {...toggleCart} {...openFood}/>
    </>
  );
}

export default App;
