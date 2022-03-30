let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 출력은 맞는데 백준에서는 틀렸다고 나온 내 코드

const numbers = input.map((x) => Number(x));
let leftNumArray = [];

numbers.forEach((item) => {
  let checkNewLeft = false;
  const leftNum = item % 42;
  for (item of leftNumArray) {
    if (item === leftNum) {
      checkNewLeft = true;
      break;
    }
  }
  if (checkNewLeft === false) {
    leftNumArray.push(leftNum);
  }
});

console.log(leftNumArray.length);

// indexof 함수 사용
const numbers = input.map((x) => Number(x));
const leftNumArray = [];

numbers.forEach((item) => {
  const number = item % 42;
  if (leftNumArray.indexOf(number) === -1) {
    leftNumArray.push(number);
  }
});

console.log(leftNumArray.length);

// Set 객체 사용
const numbers = input.map((x) => Number(x % 42));
const leftNumObj = new Set(numbers); // set 객체로 만들어서 중복을 제거 한다.
const leftNumArray = [...leftNumObj];
console.log(leftNumArray.length);
