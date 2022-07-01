let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let check = 0;
let newNum = Number(input);

do {
  let rightNum = newNum;
  let sumNum = Math.floor(newNum / 10) + (newNum % 10);
  if (rightNum >= 10) {
    rightNum %= 10;
  }
  if (sumNum >= 10) {
    sumNum %= 10;
  }
  newNum = rightNum * 10 + sumNum;

  check++;
} while (Number(input) !== newNum);

console.log(check);

// 다른 사람이 푼 코드
sumNum = Math.floor(newNum / 10) + (newNum % 10);
newNum = (newNum % 10) * 10 + (sumNum % 10);
