import React from "react";
import styled from "styled-components";
import {foods} from "../Data/FoodData";
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";

const MenuStyled = styled.div`
  // border: 2px solid black;
  margin: 0px 400px 20px 50px;
  height: 1000px;
`;


export function Menu() {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <FoodGrid>
        {foods.map(food => (
          <Food img={food.img}>
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  )
}