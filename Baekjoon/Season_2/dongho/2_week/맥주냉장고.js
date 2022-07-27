let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

const n = +input;
const t = Math.floor(Math.sqrt(n)) + 10;
let minSize = Number.MAX_SAFE_INTEGER;
let output = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    const k = Math.floor(n / i / j);
    if (i * j * k != n) continue;
    if (j > k) continue;
    const size = i * j + i * k + j * k;
    if (size < minSize) {
      minSize = size;
      output = `${k} ${j} ${i}`;
    }
  }
}

console.log(output);
