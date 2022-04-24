let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split(" ")
  .map((x) => Number(x));

const fixedCost = input[0]; // 고정 비용
const variableCost = input[1]; // 가변 비용
const sellingCost = input[2]; // 판매 비용

if (variableCost >= sellingCost) {
  console.log("-1");
} else {
  const count = Math.floor(fixedCost / (sellingCost - variableCost)) + 1;
  console.log(count);
}
