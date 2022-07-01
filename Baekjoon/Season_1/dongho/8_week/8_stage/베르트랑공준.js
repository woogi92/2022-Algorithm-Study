let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split("\n")
  .map((x) => Number(x));

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < input.length; i++) {
  const N = input[i];
  if (N === 0) {
    break;
  }
  let count = 0;
  for (let j = N + 1; j <= 2 * N; j++) {
    if (isPrime(j)) {
      count++;
    }
  }
  console.log(count);
}
