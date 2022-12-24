function moneyBox() {
  let saveCoins = 0;

  function count(coins) {
    saveCoins += coins;
    return console.log(`MoneyBox: $${saveCoins}`);
  }

  return count;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(1);
myMoneyBox(2);
myMoneyBox(3);
myMoneyBox(4);

const myMoneyBoxAngel = moneyBox();

myMoneyBoxAngel(1);
myMoneyBoxAngel(2);
myMoneyBoxAngel(3);
