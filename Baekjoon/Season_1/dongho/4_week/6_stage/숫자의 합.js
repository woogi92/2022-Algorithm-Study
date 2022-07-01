let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

// 문자열을 배열로 만든 후 정수형으로 변환
const numArr = input[1].split("").map((num) => Number(num));

// 배열의 값들을 sum에 더함
let sum = 0;
numArr.forEach((num) => {
  sum += num;
});

// 출력
console.log(sum);
