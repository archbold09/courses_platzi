function greeting() {
  let userName = 'Ana'; // disponible en el alcance de la funcion para otras funciones
  console.log(userName);

  if (userName === 'Ana') {
    console.log(`Hello ${userName}`);
  }

  function newfunc(name) {
    console.log(name);
    console.log(userName);
  }
  newfunc(userName);
}

greeting();
// console.log(userName); // error-> Aca no esta disponible
