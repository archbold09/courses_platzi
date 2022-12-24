const fetch = require('node-fetch');

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
};

const data = {
  title: 'New Angel Course',
  price: 1000,
  description: 'A description',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any']
};

fetchData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
