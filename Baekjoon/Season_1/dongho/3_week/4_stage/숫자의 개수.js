let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const numbers = input.map((x) => Number(x));
const multiNum = String(numbers[0] * numbers[1] * numbers[2]);
const multiNumLen = multiNum.length;
let count = 0;
for (let i = 0; i <= 9; i++) {
  count = 0; // count 값 초기화
  for (let j = 0; j < multiNumLen; j++) {
    if (multiNum[j] === String(i)) {
      count++;
    }
  }
  console.log(count);
}

// 참신한 다른 방식

for (let i = 0; i <= 9; i++) {
  console.log(multiNum.split(i).length - 1);
}
