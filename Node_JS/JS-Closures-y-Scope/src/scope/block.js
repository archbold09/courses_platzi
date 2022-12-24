function fruits() {
  if (true) {
    var fruit = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
    console.log(fruit2); //. se mantienen en el alcancen del bloque
    console.log(fruit3); //. se mantienen en el alcancen del bloque
  }
  console.log(fruit); //. var sale del alcancen del bloque
}

fruits();
