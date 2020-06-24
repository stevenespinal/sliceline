import React from "react";
import styled from "styled-components";
import {ConfirmButton, Footer, Content} from "../FoodDIalog/FoodDialog";

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
`;

export function Order({orders}) {
  return (
    <OrderStyle>
      <OrderContent>{orders.length === 0 ? 'Your Order Is Looking Empty' :
        <>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </>
      }
      </OrderContent>
      <Footer>
        <ConfirmButton>Checkout</ConfirmButton>
      </Footer>
    </OrderStyle>
  )
}