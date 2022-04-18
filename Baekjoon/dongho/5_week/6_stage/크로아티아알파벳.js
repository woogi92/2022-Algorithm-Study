let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .trim();

// 다른사람 코드
const croatiaDB = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

croatiaDB.forEach((alphabet) => {
  input = input.split(alphabet).join("Q");
});

console.log(input.length);

// 내가 풀었다 실패한 코드
/*
const croatiaDB = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let existDB = [];
let sum = 0;

// 목록에 있는 알파벳 세기
croatiaDB.forEach((element) => {
  const exist = input.indexOf(element);
});

// 문자열에서 목록에 있는 알파벳 제거
existDB.forEach((element) => {
  input = input.replace(element, "");
});

// "dz=" 와 "z=" 둘 다 있을 경우 예외처리
if (existDB.includes("dz=") && existDB.includes("z=")) {
  sum--;
}

// 목록에 없는 알파벳 세기
sum += input.length;

console.log(sum);
*/
