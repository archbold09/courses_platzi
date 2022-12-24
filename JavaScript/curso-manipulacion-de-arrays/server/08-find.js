const numbers = [1, 2, 3, 4, 5, 2, 1, 2];

const result = numbers.find((item) => item > 4);

console.log(result);

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

const result2 = products.find((item) => item.id === '🌭');
const result3 = products.find((item) => item.id === '');
console.log(result2);
console.log(result3 ?? false);

const result4 = products.findIndex((item) => item.id === '🌭');
const result5 = products.findIndex((item) => item.id === '');
console.log(result4);
console.log(result5 ?? false);
