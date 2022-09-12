/*
  1. 입력값 받기
  2. Set객체를 사용해 문자열 비교
  3. 듣도 보지도 못한 사람들 사전순 배열
  4. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

// 1. 입력값 받기
// 1-1. 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M
const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);
// 1-2. 듣도 못한 사람의 이름
let listenPeople = [];
for (let i = 0; i < N; i++) {
  listenPeople.push(input[i]);
}
// 1-3. 보도 못한 사람의 이름
let seePeople = [];
for (let i = N; i < N + M; i++) {
  seePeople.push(input[i]);
}

// 2. Set객체를 사용해 문자열 비교
const set = new Set(listenPeople);
const listenSeePeople = [];
seePeople.forEach((person) => {
  if (set.has(person)) {
    listenSeePeople.push(person);
  }
});

// 3. 듣도 보지도 못한 사람들 사전순 배열
listenSeePeople.sort();

// 4. 출력
console.log(listenSeePeople.length);
listenSeePeople.forEach((person) => {
  console.log(person);
});
