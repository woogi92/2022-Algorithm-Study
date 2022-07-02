let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split(" ")
  .map((x) => +x);

const interestCalculation = (money, leftYear) => {
  let year, percent;
  if (leftYear >= 5) {
    year = 5;
    percent = 0.35;
  } else if (leftYear >= 3) {
    year = 3;
    percent = 0.2;
  } else if (leftYear >= 1) {
    year = 1;
    percent = 0.05;
  } else {
    return money;
  }
  money += Math.floor(money * percent);
  return interestCalculation(money, leftYear - year);
};

console.log(interestCalculation(input[0], input[1]));
