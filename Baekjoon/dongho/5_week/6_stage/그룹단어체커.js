let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split("\n");

const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
let count = 0;

// split 함수를 써볼까?
for (let i = 1; i <= input[0]; i++) {
  let isContinuity = true;
  input[i] = `*${input[i]}*`;
  for (let j = 0; j < alphabetArr.length; j++) {
    let word = input[i].split(alphabetArr[j]).filter((str) => str !== "");
    if (word.length > 2) {
      isContinuity = false;
      break;
    }
  }
  if (isContinuity) {
    count++;
  }
}

console.log(count);
