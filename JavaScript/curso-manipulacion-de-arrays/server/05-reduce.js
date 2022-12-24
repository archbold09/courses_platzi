const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
];

// const response1 = orders.map((item) => {
//   item.tax = 0.1;
//   return item;
// });

// console.log(orders);
// console.log(response1);

const response2 = orders.map((item) => {
  return {
    ...item,
    tax: 0.1
  };
});

console.log(orders);
console.log(response2);
