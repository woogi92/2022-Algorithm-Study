let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ");
const cards = input[1].split(" ").map((card) => +card);
let temp = 0;
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      temp = cards[i] + cards[j] + cards[k];
      if (temp > result && temp <= M) {
        result = temp;
      }
    }
  }
}

console.log(result);
