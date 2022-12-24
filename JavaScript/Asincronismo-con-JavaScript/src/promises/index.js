/* estados de promises
       > pending (pendiente): estado inicial, ni cumplido ni rechazado.
       > fulfilled (cumplida): lo que significa que la operación se completó con éxito.
       > rejected (rechazada): lo que significa que la operación falló.
*/

/* promises using .then */
const promise = new Promise((resolve, rejected) => {
  resolve('Hey!');
});

const cows = 15;

const countCows = new Promise((resolve, rejected) => {
  if (cows <= 2) {
    resolve('Yes, we can do it!');
  } else {
    rejected(`No, we can't do it :(`);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/* promises using async - await */

const cowCount = async () => {
  try {
    const sumValue = Math.floor(Math.random() * 10);
    if (sumValue === 0) throw new Error('Error', sumValue);
    return sumValue;
  } catch (error) {
    return error;
  }
};

cowCount()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
