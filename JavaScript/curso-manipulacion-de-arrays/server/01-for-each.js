const letters = ['a', 'b', 'c'];

// long
for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);
}

//short

letters.forEach((item) => console.log(item));
