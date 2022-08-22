let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const N = input.shift();

let numbers = input[0].split(" ").map((x) => +x); // 원본 배열
let tmpNumbers = numbers.slice(); // 복사본

tmpNumbers.sort((a, b) => a - b); // 오름차순
const set = new Set(tmpNumbers); // 중복제거

// { item => index } 형식의 맵 객체 생성
// { -10 => 0, -9 => 1, 2 => 2, 4 => 3 }
const map = new Map();
[...set].forEach((item, index) => {
  map.set(item, index);
});

let answer = "";
numbers.forEach((item) => {
  answer += map.get(item) + " ";
});

console.log(answer);
