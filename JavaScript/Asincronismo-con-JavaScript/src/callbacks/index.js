function sum(a, b) {
  return a + b;
}

function myCallbackSum(a, b, cb) {
  return cb(a, b);
}

console.log(myCallbackSum(10, 20, sum));

setTimeout(() => {
  console.log('Hi JavaScript!');
}, 2000);

function greatting(name) {
  console.log(`Hi ${name}`);
}

setTimeout(greatting, 2000, 'Angel');
