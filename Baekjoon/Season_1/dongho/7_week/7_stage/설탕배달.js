const fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

// 내가 최초로 제출한 코드
input = Number(input); // 입력값
let number = input; // 입력값 복제
let kg; // 출력값

if (input % 5 === 0) {
  kg = input / 5;
} else {
  while (1) {
    if (number < 0) {
      if (input % 3 === 0) {
        kg = input / 3;
      } else {
        kg = "-1";
      }
      break;
    }
    number -= 3;
    if (number % 5 === 0) {
      kg = number / 5 + (input - number) / 3;
      break;
    }
  }
}

console.log(kg);

// 다른사람의 코드
/*
let SUGAR = Number(input); // kg
let bags = 0; // 작은 봉지(3)

while (true) {
  if (SUGAR % 5 === 0) {
    console.log(SUGAR / 5 + bags);
    break;
  } else if (SUGAR <= 0) {
    console.log(-1);
    break;
  }
  SUGAR = SUGAR - 3;
  bags++;
}
*/
