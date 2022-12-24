const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Async!'), 2000) : reject(new Error('Error'));
  });
};

const anotherFunction = async () => {
  const response = await new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Async!'), 3000) : reject(new Error('Error'));
  });
  console.log(response);
  console.log('Hello');
};

// ((x) => console.log(x + 5))(5);
console.log('Before');
anotherFunction();
console.log('After');
