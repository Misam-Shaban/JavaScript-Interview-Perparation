const prices = [100, 250, 500, 750, 1000];

const newPrice = prices.map((number) => {
  return number + (number * 10) / 100;
});

console.log(newPrice);
