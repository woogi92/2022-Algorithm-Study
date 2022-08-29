/*
  1. 입력값 받기
  2. Set 객체의 has 메서드 활용
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

// 1. 입력값 받기
const [N, M] = input.shift().split(" ").map(Number);
const originWords = [];
for (let i = 0; i < N; i++) {
  originWords.push(input.shift());
}
const checkwords = input;

// 2. Set 객체의 has 메서드 활용
const set = new Set(originWords);
let count = 0;
checkwords.forEach((checkWord) => {
  // has() 메서드는 Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다.
  if (set.has(checkWord)) count++;
});

console.log(count);
