const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split("\n")
  .map((x) => Number(x));

const T = input.shift();

for (let i = 0; i < T; i++) {
  const a = input.shift(); // 1
  const b = input.shift(); // 3
  const apartment = [];

  for (let i = 0; i <= a; i++) {
    apartment.push([1]);
    for (let j = 1; j < b; j++) {
      if (i === 0) {
        apartment[i].push(j + 1);
      } else {
        apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
      }
    }
  }
  console.log(apartment);

  const floor = a;
  const room = b - 1;
  console.log(apartment[floor][room]);
}
