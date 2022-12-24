const letters = ['a', 'b', 'c'];

// long
// const newArray = [];
// for (let i = 0; i < letters.length; i++) {
//   const element = letters[i];
//   newArray.push(element + '++');
// }
// console.log(newArray);

//short

const newArray = letters.map((item) => item + '++');
console.log(letters);
console.log(newArray);
