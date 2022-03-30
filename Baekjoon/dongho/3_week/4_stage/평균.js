let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

let sum = 0;
const numArrLen = Number(input[0]);
let numArr = input[1].split(" ").map((x) => Number(x));
numArr.sort((a, b) => a - b); // 배열 오름차순 정렬
const maxNum = numArr[numArrLen - 1]; // 배열 마지막 값 (최댓값) 출력
numArr = numArr.map((x) => (x / maxNum) * 100); // 값 변환
numArr.forEach((item) => {
  // 배열 합산
  sum += item;
});
const avg = sum / numArrLen;
console.log(avg);
