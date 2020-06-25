import React, {Fragment} from "react";
import styled from "styled-components";
import {foods, formatPrice} from "../Data/FoodData";
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";

const MenuStyled = styled.div`
  margin: 50px;
  @media screen and (min-width: 1200px) {
    margin: 0px 400px 20px 50px;
  }
`;


export function Menu({setOpenFood, open}) {
  return (
    <MenuStyled open={open}>
      {Object.entries(foods).map(([sectionName, foods], index) => (
        <Fragment key={index}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food, index) => (
              <Fragment key={index}>
                <Food onClick={() => setOpenFood(food)} img={food.img}>
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>
                  </FoodLabel>
                </Food>
              </Fragment>
            ))}
          </FoodGrid>
        </Fragment>
      ))}
    </MenuStyled>
  )
}