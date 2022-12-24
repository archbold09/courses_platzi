function sumValues(limitValue, cb) {
  const value = Math.floor(Math.random() * limitValue);

  if (value !== 0) {
    return cb(null, value);
  } else {
    const error = new Error('Error', value);

    return cb(error, null);
  }
}

sumValues(23, (error, data) => {
  if (error) return console.log(error);
  console.log(data);
  setTimeout(() => {
    sumValues(233, (error2, data2) => {
      if (error2) return console.log(error2);
      console.log(data2);
      setTimeout(() => {
        sumValues(233, (error3, data3) => {
          console.log(data3);
          if (error3) return console.log(error3);
          console.log(data + data2 + data3);
        });
      }, 3000);
    });
  }, 3000);
});
