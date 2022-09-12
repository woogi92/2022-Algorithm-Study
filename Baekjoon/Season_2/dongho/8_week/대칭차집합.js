/*
  1. 입력값 받기
  2. Set 객체를 사용해 교집합 개수 구하기
  3. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

// 1. 입력값 받기
const [numA, numB] = input[0].split(" ").map((x) => +x);
const [...A] = input[1].split(" ").map((x) => +x);
const [...B] = input[2].split(" ").map((x) => +x);

// 2. Set 객체를 사용해 교집합 개수 구하기
const A_map = new Set(A);
let count = 0;
B.forEach((element) => {
  if (A_map.has(element)) count++;
});

// 3. 출력
// 대칭 차집합의 원소의 개수 = (A원소 개수 - 교집합 개수) + (B원소 개수 - 교집합 개수)
const output = numA - count + numB - count;
console.log(output);
