export function formatPrice(price) {
  return price.toLocaleString("NO", {
    style: "currency",
    currency: "NOK"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 500
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 900
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 800
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 1500
  },
  {
    img: "/img/pasta1.jpeg",
    name: "Pasta almighty",
    section: "Pasta",
    price: 360
  },
  { img: "/img/pasta2.jpeg", 
    name: "Pasta balls", 
    section: "Pasta", 
    price: 350
  },
  {
    img: "/img/pasta3.jpeg",
    name: "Pasta magnifico",
    section: "Pasta",
    price: 950
  },
  {
    img: "/img/pasta4.jpeg",
    name: "Pasta carbonara",
    section: "Pasta",
    price: 900
  },
  {
    img: "/img/oysters.jpeg",
    name: "oyster",
    section: "Sides and Drinks",
    price: 1500
  },
  {
    img: "/img/kaviar.jpeg",
    name: "Kaviar",
    section: "Sides and Drinks",
    price: 800
  },
  {
    img: "/img/vin.jpeg",
    name: "Wine",
    section: "Sides and Drinks",
    choices: ["de la Romanée", "Musigny", "Scharzhofberger"],
    price: 1000
  },
  {
    img: "/img/voss.jpeg",
    name: "Voss water",
    section: "Sides and Drinks",
    price: 500
  },
  {
    img: "/img/soda.jpeg",
    name: "Soda",
    section: "Sides and Drinks",
    choices: ["Coke", "Fanta", "Sprite"],
    price: 500
  },

];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});


