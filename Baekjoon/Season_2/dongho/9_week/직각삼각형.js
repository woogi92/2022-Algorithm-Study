const [...input] = require("fs")
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.forEach((T) => {
  const [x, y, z] = T.split(" ")
    .map((x) => +x)
    .sort((a, b) => a - b);
  if (!(x === 0 && y === 0 && z === 0)) {
    if (x ** 2 + y ** 2 === z ** 2) console.log("right");
    else console.log("wrong");
  }
});
