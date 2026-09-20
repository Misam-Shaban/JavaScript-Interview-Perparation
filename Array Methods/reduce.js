const numbers = [5, 10, 15];

const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(total);
