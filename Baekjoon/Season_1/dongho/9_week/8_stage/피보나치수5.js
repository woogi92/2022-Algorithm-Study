let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

input = Number(input);

const getFibonachi = (number) => {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return getFibonachi(number - 2) + getFibonachi(number - 1);
};

console.log(getFibonachi(input));
