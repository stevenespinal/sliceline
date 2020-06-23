import React from "react";
import styled from "styled-components";
import { foods} from "../Data/FoodData";
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";

const MenuStyled = styled.div`
  margin: 0px 400px 20px 50px;
  @media screen and (max-width: 1200px) {
    margin: 0px;
  }
`;


export function Menu({setOpenFood}) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => (
              <Food onClick={() => setOpenFood(food)} img={food.img}>
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}