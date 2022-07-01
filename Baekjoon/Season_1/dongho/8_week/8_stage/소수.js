let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split("\n");

const M = Number(input[0]);
const N = Number(input[1]);
const array = []; // 배열
let sum = 0; // 합

// 소수이면 true 반환, 아니면 false 반환
const checkSosu = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// M~N 까지 소수인지 체크
for (let i = M; i <= N; i++) {
  if (checkSosu(i)) {
    sum += i;
    array.push(i);
  }
}

if (array.length === 0) {
  console.log("-1");
} else {
  console.log(sum);
  console.log(array[0]);
}
