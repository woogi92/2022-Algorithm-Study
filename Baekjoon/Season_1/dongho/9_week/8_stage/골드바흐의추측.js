let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);
input.shift();

const maxValue = Math.max(...input);
const numbers = new Array(maxValue + 1).fill(false);

for (let i = 2; i < maxValue; i++) {
  if (numbers[i] === false) {
    for (let j = i * i; j <= maxValue; j += i) {
      numbers[j] = true;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  const curNumber = input[i];

  let A = curNumber / 2;
  let B = curNumber / 2;

  while (1) {
    if (!numbers[A] && !numbers[B]) {
      console.log(`${A} ${B}`);
      break;
    }
    A -= 1;
    B += 1;
  }
}
