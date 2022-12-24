const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1';

const FetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const anotherFunction = async (urlApi) => {
  try {
    const products = await FetchData(`${urlApi}/products`);
    const product = await FetchData(`${urlApi}/products/${products[0].id}`);
    const category = await FetchData(`${urlApi}/categories/${product.name}`);
    return {
      products,
      product,
      category
    };
  } catch (error) {
    return error;
  }
};

anotherFunction(API)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
