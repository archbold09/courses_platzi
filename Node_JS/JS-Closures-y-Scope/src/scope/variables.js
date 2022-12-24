var firstName; // Undefined // declaramos
firstName = 'Angel'; // asignamos

console.log(firstName);

var lastName = 'Angel Torres'; // declarando y asignando

lastName = 'Angel Archbold'; // reasignando

var secondName = 'Junior';
var secondName = 'Archbold';

console.log(secondName);

// ** var RESUMEN  ** //
// ** permite redeclarar y reasignar un valor  ** //
// ** sale del bloque donde fue creado y muestra valores por fuera  ** //

let fruit; // declaramos
fruit = 'test'; // asigna un valor
fruit = 'test2'; // reasignar un valor
console.log(fruit);

// ** let RESUMEN  ** //
// ** NO permite redeclarar  PERO si reasignar un valor  ** //
// ** No sale del bloque del que fue asignada y no muestra el valor por fuera ** //

const animal = 'dog'; // declarar y asignar
// const animal // NO PERMITE DECLARAR SIN ASIGNAR VALOR
// const animal = 'cat' //  NO PERMITE REDECLARAR
// animal = 'cat'; // NO PERMITE REASIGNAR
console.log(animal);

const vehicles = []; // HACE REFERENCIA A UNA CONSTANTE [ARRAY]  Y PERMITE TRABAJAR CON ELLA
vehicles.push('Mazda');
vehicles.pop();
console.log(vehicles);

const person = {}; // HACE REFERENCIA A UNA CONSTANTE [ARRAY]  Y PERMITE TRABAJAR CON ELLA
person.name = 'Mazda';
person.lastName = 'Perez';
delete person.lastName;
console.log(person);
