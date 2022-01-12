import React from "react";
import styled from "styled-components";
import {DialogContent, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
import { backgroundcolor, checkout, orderfonts } from "../Styles/colors";


  const OrderStyled = styled.div`
  @media (max-width: 768px) {
    width: 50%
  }
  position: fixed;
  right: 0px;
  top: 48px;
  width: 300px;
  background-color: ${checkout};
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding-top: 20px;
  margin-top: 100px;
  height: 100%;
  color: ${orderfonts};
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid ${backgroundcolor};
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      
      
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: ${orderfonts};
  font-weight: bold;
  font-size: 16px;
`;

export function Order({ orders, setOrders, setOpenFood, setOpenCheckout }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Not feeling hungry? click on the pictures to get started!</OrderContent>
      ) : (
        <OrderContent>
          {" "}
          <OrderContainer> Your Order: </OrderContainer>{" "}
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>Edit Item</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
              <div>{formatPrice(getPrice(order))}</div>
              <div
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                Remove item
                </div>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton
        onClick={() => {
          setOpenCheckout(ConfirmButton);
        }}

        >Order</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
