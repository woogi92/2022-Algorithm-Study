let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let price;

function getMax(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

function getSameNum(a, b, c) {
  if (a === b) {
    sameNum = a;
  } else if (b === c) {
    sameNum = b;
  } else {
    sameNum = c;
  }
  return sameNum;
}

if (a === b && b === c) {
  price = 10000 + a * 1000;
} else if (a !== b && b !== c && c !== a) {
  const maxNum = getMax(a, b, c);
  price = maxNum * 100;
} else {
  let sameNum = getSameNum(a, b, c);
  price = 1000 + sameNum * 100;
}

console.log(price);
