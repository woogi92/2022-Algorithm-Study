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
  // 입력값이 1일 경우
  if (num === 1) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) {
      return i;
    }
  }
};

const distributeSize = (size) => {
  const minPrime = getMinPrime(size[check]);
  size[check] /= minPrime;
  size[2] *= minPrime;
  size.sort((a, b) => b - a);
  for (let i = history.length; i > 0; i--) {
    if (JSON.stringify(size) === JSON.stringify(history[i])) {
      let output;
      let minSize = 10000000;
      history.forEach((size) => {
        const tmpSize = size[0] + size[1] + size[2];
        if (tmpSize < minSize) {
          minSize = tmpSize;
          output = size;
        }
      console.log(output.join(" "));
      return;
      } else {
        check = 1;
        history.push(size.slice());
        console.log(history);
        distributeSize(size);
      }
    }
  }
  history.push(size.slice());
  distributeSize(size);
};

let check = 0;
let size = [+input, 1, 1];
let history = [size.slice()];

distributeSize(size);
