const amount = (number, coins) => {
  var sum = 0;
  var arrayCoinst = [];
  for (var i = 0; i < coins.length; i++) {
    sum += coins[i];
    arrayCoinst.push(coins[i]);
    if (sum > number) {
      sum -= coins[i];
      sum += coins[i - 1];
    }
    if (sum === number) {
      return arrayCoinst;
    }
  }
};
console.log(amount(46, [25, 10, 5, 2, 1]));

function amountToCoins(amount, coins) {
  if (amount == 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(amount, coins);
    }
  }
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
