import styled from "styled-components";
import { Title } from "../Styles/title";
import { orderfonts } from "../Styles/colors";


export const FoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding-bottom: 150px;
  color: ${orderfonts}
`;

export const FoodLabel = styled(Title)`
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  width: 100px;
`;

export const Food = styled.div`
 flex-direction: row;
 flex:1;
 height: 100px; 
 padding: 10px; 
 font-size: 20px; 
 background-image: ${({ img }) => `url(${img});`} 
 background-position: center;
 background-size: cover;
 filter: contrast(75%); 
 border-radius: 7px; 
 margin-top: 5px; 
 transition-property: box-shadow margin-top filter; 
 transition-duration: .1s; 
 box-shadow: 0px 0px 2px 0px grey;
 &:hover {
  cursor: pointer; 
  filter: contrast(100%); 
  margin-top: 0px; 
  margin-bottom: 5px; 
  box-shadow: 0px 5px 10px 0px grey;
 }
`;


