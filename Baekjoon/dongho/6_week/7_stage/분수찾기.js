let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

input = Number(input);

let block = 1; // n번째 대각선의 첫 인덱스 값
let range = 0; // n번째 대각선

// block, range값 구하기
while (block <= input) {
  range++;
  block += range;
}

// block값 한 칸 이전으로 되돌리기
block -= range;

//대각선의 줄이 짝수번 째 일때
if (range % 2 === 0) {
  console.log(`${1 + (input - block)}/${range - (input - block)}`);
}
//대각선의 줄이 홀수번 째 일때
else {
  console.log(`${range - (input - block)}/${1 + (input - block)}`);
}
