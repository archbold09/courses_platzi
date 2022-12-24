// // const array = ['Diego', 'Angel', 'Karen'];
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.data;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   unShift(item) {
//     for (let i = this.length; i > 0; i--) {
//       this.data[i] = this.data[i - 1];
//     }

//     this.data[0] = item;
//     this.length++;
//     return this.data;
//   }

//   shiftIndex(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftIndex(index);

//     return item;
//   }
// }

// const array = new MyArray();

// array.push('Angel');
// array.push('Junior');
// array.push('Torres');
// array.push('Archbold');

// array.unShift('Angelito');
// // array.pop();
// array.delete(0);

// console.log(array);

/* delete the first item */
const array = [1, 2, 3, 4];

for (let i = array.length; i > 0; i--) {
  array[i] = array[i - 1];
}

array[0] = 34;

console.log(array);
