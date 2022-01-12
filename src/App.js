import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { FoodDialog } from "./components/FoodDialog/FoodDialog";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { Order } from "./components/Order/Order";
import { useOpenFood } from "./components/Hooks/useOpenFood";
import { useOrders } from "./components/Hooks/useOrders";
import { CheckoutDialog } from "./components/CheckoutDialog/CheckoutDialog";
import { useTitle } from "./components/Hooks/useTitle";
import { useOpenCheckout } from "./components/Hooks/useOpenCheckout";



function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const openCheckout = useOpenCheckout();
  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <CheckoutDialog {...openCheckout} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} {...openCheckout} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;


