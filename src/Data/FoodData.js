export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: .99
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 4.99
  },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'Pizza',
    price: 5
  },
  {
    name: 'Cheese Burger',
    img: '/img/burger.jpeg',
    section: 'Sandwich',
    price: 12.95
  },
  {
    name: 'Gyro',
    img: '/img/gyro.jpeg',
    section: 'Sandwich',
    price: 13.95
  },
  {
    name: 'Sandwich',
    img: '/img/sandwich.jpeg',
    section: 'Sandwich',
    price: 12.99
  },
  {
    name: 'French Fries',
    img: '/img/fries.jpeg',
    section: 'Sides',
    price: 10.99
  },
  {
    name: 'Chicken Tenders',
    img: '/img/chicken-fingers.jpeg',
    section: 'Sides',
    price: 15.99
  },
  {
    price: 2,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Coke', 'Sprite', 'Fanta']
  }
];

export function formatPrice(price) {
  return price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});