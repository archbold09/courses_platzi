const months = ['March', 'Jan', 'Feb', 'Dec'];

const numbers = [1, 30, 4, 21, 100000];

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
];

months.sort((a, b) => a - b);
console.log(months);
numbers.sort((a, b) => a - b);
console.log(numbers);
words.sort((a, b) => a - b);
console.log(words);
orders.sort((a, b) => a - b);
console.log(orders);
