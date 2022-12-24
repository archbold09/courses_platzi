var a; // declarar
var b = 'b'; // declarar y asignar
b = 'bb'; // reasignar
var a = 'aa'; // redeclaracion

// global scope

var fruit = 'Apple'; // global
console.log(fruit);
function bestFruit() {
  console.log(fruit);
}
bestFruit();

function countries() {
  country = 'Colombia'; // se asigna un valor y queda como global
  console.log(country);
}
countries();
country;
