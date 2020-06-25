import React from "react";
import styled from "styled-components";
import {Title} from "../Styles/title";
import {pizzaRed} from "../Styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
  height: 100%;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled(Title)`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  line-height: 23px;
  cursor: pointer;
  margin: 0 10px;
  border: 1px solid ${pizzaRed};
  ${({disabled}) =>
  disabled && `
    opacity: 0.5;
    pointer-events: none;`
}
  
  &:hover {
    background-color: #ffe3e3;
  }
  
  ::selection {
    background-color: transparent;
    // color: #000;
}
`;

export function QuantityInput({quantity}) {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton onClick={() => {quantity.setValue(quantity.value - 1)}} disabled={quantity.value === 1}>-</IncrementButton>
      <QuantityInputStyled {...quantity}/>
      <IncrementButton onClick={() => {quantity.setValue(quantity.value + 1)}}>+</IncrementButton>
    </IncrementContainer>
  )
}