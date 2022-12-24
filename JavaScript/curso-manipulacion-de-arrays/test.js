const x = [15, 16, 45];

const days = [];
for (let i = 0; i < x.length; i++) {
  let [total, day, valueToPay, previousValue] = [0, 0, 1, 0];

  while (total < x[i]) {
    valueToPay = valueToPay + previousValue;
    previousValue = valueToPay;
    day++;
    total = total + valueToPay;
  }

  days.push(day);
}

console.log(days);
