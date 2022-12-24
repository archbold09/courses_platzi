function* gen() {
  yield 1;
  yield 1;
  yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());
console.log(g.next());

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const i = iterate(['Angel', 'Milena', 'Juan', 'Pepe']);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
