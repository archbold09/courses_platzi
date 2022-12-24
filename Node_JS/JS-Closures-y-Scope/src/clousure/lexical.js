const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // funcion interna

    const inner = 2;

    console.log(myNumber, myGlobal);

    function child() {
      // funcion interna

      const innerChild = 3;

      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
