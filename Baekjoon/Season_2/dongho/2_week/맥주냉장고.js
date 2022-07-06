let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getMinPrime = (num) => {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) {
      return i;
    }
  }
};

const distributeSize = (size) => {
  if (size === tmpSize) {
    return size;
  }
  const minPrime = getMinPrime(size[0]);
  size[0] /= minPrime;
  size[2] *= minPrime;
  size.sort((a, b) => b - a);
  if (history.lastIndexOf(size)) {
    return;
  }
  distributeSize(size);
};

let size = [+input, 1, 1];
let history = [];

distributeSize(size);
console.log(size.join(" "));
