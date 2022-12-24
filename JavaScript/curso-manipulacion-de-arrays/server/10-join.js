const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕'
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔'
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭'
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞'
  }
];

const result1 = products.includes('🌭');
console.log(result1);
