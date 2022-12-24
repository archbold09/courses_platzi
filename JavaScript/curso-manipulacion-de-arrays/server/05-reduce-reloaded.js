const items = [1, 2, 2, 3, 4, 5, 6, 5, 10, 21];

const result = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(result);

const data = [
  {
    name: 'Nicolas',
    level: 'low'
  },
  {
    name: 'Andrea',
    level: 'medium'
  },
  {
    name: 'Zulema',
    level: 'hight'
  },
  {
    name: 'Santiago',
    level: 'low'
  },
  {
    name: 'Valentina',
    level: 'medium'
  },
  {
    name: 'Lucia',
    level: 'hight'
  }
];

const result2 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(result2);
