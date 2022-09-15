const [...input] = require("fs")
  .readFileSync(
    "/Users/User/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const x = [];
const y = [];

input.forEach((xy) => {
  const arr = xy
    .trim()
    .split(" ")
    .map((x) => +x);
  x.push(arr[0]);
  y.push(arr[1]);
});

for (let i = 0; i < 3; i++) {
  const xCount = x.filter((num) => num === x[i]).length;
  if (xCount === 1) {
    x.push(x[i]);
  }
  const yCount = y.filter((num) => num === y[i]).length;
  if (yCount === 1) {
    y.push(y[i]);
  }
}

console.log(x[3], y[3]);
