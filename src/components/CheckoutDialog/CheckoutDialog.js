import React from "react";
import styled from "styled-components";
import { navlink } from "../Styles/colors";
import { meny } from "../Styles/colors";

const Checkout = styled.div`
@media (max-width: 768px) {
    width: 400px;
    padding-left: 50px;
  }
    width: 500px;
    background-color: ${navlink};
    position: fixed;
    top: 75px;
    z-index: 11;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
    border-radius: 30px;
  `;

  const PayButton = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${meny};
  margin-lefT: 28%;
`;

const CheckoutContactInput = styled.div`
  height: 200px;
  padding-top: 50px;
  text-align: center;
  font-family: 'Righteous', cursive;
  margin-bottom: 50px;
`;

const CheckoutShadow = styled.div `
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index: 4;
`;

const CheckOutFooter = styled.div`
  min-height: 100px;
  margin-bottom: 20px;
  position: center;
  background-size: cover;
  font-family: 'Righteous', cursive;
  text-align: center;
`;

const Delivery = styled.div`
min-height: 80px;
margin-bottom: 10px;
position: center;
background-size: cover;
font-family: 'Righteous', cursive;
text-align: center;
`;

export function CheckoutDialog({openCheckout, setOpenCheckout}){
  
  function close(){
    setOpenCheckout();
  }

  



  if (!openCheckout) return null;
    return( 
    <>
    <CheckoutShadow />
    <Checkout >
      <CheckoutContactInput>    
        <div>
          <h3>Contact information</h3>
          <form><input placeholder="Name"></input></form>
          <form><input placeholder="Address"></input></form>
          <form><input placeholder="Phone"></input></form>
          <form>
            <input placeholder="Zipcode"></input>
            <input placeholder="City"></input>
          </form>
        </div>
        </CheckoutContactInput>

    <CheckOutFooter>
    <div>Select Payment Method</div> 
      <img src="/img/paymentmethod.jpeg" alt="payment"></img>
    </CheckOutFooter>

    <Delivery>
    <div className="App">
      Select Delivery Method
      <div className="Delivery">
        <input type="radio" id="Delivery" name="choice" 
        value="Pickup" />
        Pickup
        <input type="radio" id="Delivery" name="choice" 
        value="Pickup" />
        Home Delivery
      </div>
    </div>
    </Delivery>

    <PayButton onClick={close} >
      Purchase
    </PayButton>

    
    </Checkout>
    </>
    );
}