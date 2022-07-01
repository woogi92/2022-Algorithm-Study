let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

input = Number(input);

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(input));
