const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, cb) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        cb(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error', urlApi);
        return cb(error, null);
      }
    }
  };

  xhttp.send();
}

fetchData(`${API}/products`, (error, data) => {
  if (error) return console.error(error);
  fetchData(`${API}/products/${data[0].id}`, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data[0]);
      console.log(data2);
      console.log(data3);
    });
  });
});
