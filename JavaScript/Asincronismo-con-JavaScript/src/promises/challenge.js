const fetch = require('node-fetch');

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then((result) => result.json())
//   .then((result) => result.filter((item) => item.images.length <= 2))
//   .then((result) => {
//     console.log(result.length);
//   })
//   .catch((error) => console.log(error));

fetchData(`${API}/products`)
  .then((result) => result.json())
  .then((products) => fetchData(`${API}/products/${products[0].id}`))
  .then((result) => result.json())
  .then((product) => fetchData(`${API}/categories/${product.category.id}`))
  .then((result) => result.json())
  .then((category) => console.log(category.name))
  .catch((error) => console.log(error));
