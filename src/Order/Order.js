import React from "react";
import styled from "styled-components";
import {ConfirmButton, Footer, Content} from "../FoodDIalog/FoodDialog";
import {formatPrice} from "../Data/FoodData";
import {getPrice} from "../FoodDIalog/FoodDialog";

const database = window.firebase.database();

const OrderStyle = styled.div`
  position: fixed;
  right: 0;
  top: 63px;
  width: 340px;
  background-color: white;
  height: calc(100% - 63px);
  z-index: 10;
  box-shadow: 4px 0px 5px 5px gray;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(Content)`
  padding: 40px 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid gray;
  ${({editable}) => editable ? `
      &:hover {
        cursor: pointer;
        background-color: #e7e7e7;  
      }` : `pointer-events: none;`
}
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  // grid-template-columns: 5px 120px 20px 20px;
  grid-template-columns: 1px 150px 15px 25px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 12px;
`;

function sendOrder(orders, {email, displayName}) {
  const newOrderRef = database.ref('orders').push();
  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        return acc;
      }
      if (orderKey === 'toppings') {
        return {
          ...acc,
          [orderKey]: order[orderKey].filter(({checked}) => checked).map(({name}) => name)
        };
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      }
    }, {});
  });

  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  })
}

export function Order({orders, setOrders, setOpenFood, loggedIn, login, open, setOpenOrderDialog}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * .07;
  const total = subtotal + tax;


  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  if (!open) return null;

  return (
    <OrderStyle>
      <OrderContent>{orders.length === 0 ? 'Your Order Is Looking Empty' :
        <>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable key={index}>
              <OrderItem onClick={() => setOpenFood({...order, index})}>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>{formatPrice(getPrice(order))}</div>
                <div style={{cursor: 'pointer'}} onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                }}>
                  <span role="img" aria-label="garbage">🗑️</span>
                </div>
              </OrderItem>
              <DetailItem>
                {order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div/>
              <div>Sub-Total:</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Tax:</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div/>
              <div>Total:</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </>
      }
      </OrderContent>
      <Footer>
        <ConfirmButton disabled={total === 0} onClick={() => {
          // loggedIn ? sendOrder(orders, loggedIn) : login()
          if (loggedIn) {
            setOpenOrderDialog(true)
            sendOrder(orders, loggedIn)
          } else {
            login();
          }
        }}>Checkout {formatPrice(total)}</ConfirmButton>
      </Footer>
    </OrderStyle>
  )
}