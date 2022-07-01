let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const testCaseLen = Number(input[0]); // testcase 개수

for (let i = 1; i <= testCaseLen; i++) {
  const testCaseArr = input[i].split(" ").map((x) => Number(x)); // testcase 배열
  const height = testCaseArr[0];
  const number = testCaseArr[2];
  const room = Math.ceil(number / height); // 호실
  let floor; // 층
  // 예외처리
  if (number % height === 0) {
    floor = height;
  } else {
    floor = number % height;
  }
  // 예외처리
  if (room < 10) {
    console.log(`${floor}0${room}`);
  } else {
    console.log(`${floor}${room}`);
  }
}
