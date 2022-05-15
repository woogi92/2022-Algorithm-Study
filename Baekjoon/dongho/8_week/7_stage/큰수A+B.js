// 내가 최초에 제출했던 코드
/*
const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split(" ");

let A = input[0].toString().split("");
let B = input[1].toString().split("");
let up = 0; // 올림 값
let output = []; // 출력 값

while (A.length !== 0 && B.length !== 0) {
  const plusValue = Number(A.pop()) + Number(B.pop()) + up;
  const number = Math.floor(plusValue % 10);
  up = Math.floor(plusValue / 10);
  output.unshift(number);
}

// 남아 있는 값 처리
if (A.length !== 0) {
  output.unshift(Number(A.join("")) + up);
} else if (B.length !== 0) {
  output.unshift(Number(B.join("")) + up);
}
// 올림 값이 남아있을 경우
else if (up !== 0) {
  output.unshift(up);
}

console.log(output.join(""));
*/
// 다른 사람 코드
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
