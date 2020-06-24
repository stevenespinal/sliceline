import React from "react";
import styled from "styled-components";
import {ConfirmButton, Footer, Content} from "../FoodDIalog/FoodDialog";
import {formatPrice} from "../Data/FoodData";
import {getPrice} from "../FoodDIalog/FoodDialog";

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
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid gray;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 12px;
`;

export function Order({orders}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * .07;
  const total = subtotal + tax;
  return (
    <OrderStyle>
      <OrderContent>{orders.length === 0 ? 'Your Order Is Looking Empty' :
        <>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div/>
                <div>{formatPrice(getPrice(order))}</div>
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
        <ConfirmButton disabled={total === 0}>Checkout {formatPrice(total)}</ConfirmButton>
      </Footer>
    </OrderStyle>
  )
}