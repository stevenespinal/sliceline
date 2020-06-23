import styled from "styled-components";
import {Title} from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  background-color: rgba(256, 256, 256, 0.8);
  position: absolute;
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 200px;
  background-image: ${({img}) => img ? `url(${img})` : ''};
  background-size: cover;
  background-position: center;
  filter: contrast(75%);
  padding: 10px;
  font-size: 30px;
  border-radius: 7px;
  transition-property: box-shadow margin-top filter;
  margin-top: 5px;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px gray;
  &:hover {
    cursor: pointer;
    // opacity: 0.7;
    box-shadow: 0px 5px 10px 0px gray;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
  }
`;

