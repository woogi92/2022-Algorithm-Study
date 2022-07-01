let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split("\n");

const checkSosu = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const numberArray = input[1].split(" ").map((x) => Number(x));
let count = 0;

numberArray.forEach((number) => {
  if (checkSosu(number)) {
    count++;
  }
});

console.log(count);
