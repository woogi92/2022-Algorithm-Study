let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const swapCountries = (index1, index2) => {
  const tmp = countries[index1];
  countries[index1] = countries[index2];
  countries[index2] = tmp;
};

const compareMedals = (countries, start, end, type) => {
  let typeIndex;
  if (type === "Gold") typeIndex = 1;
  if (type === "Silver") typeIndex = 2;
  if (type === "Bronze") typeIndex = 3;
  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (countries[i][typeIndex] < countries[j][typeIndex]) {
        swapCountries(i, j);
      }
    }
  }
};

const checkGoldMedal = (countries, N) => {
  compareMedals(countries, 0, N - 1, "Gold");
};

const checkSilverMedal = (countries, N) => {
  let count = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < N - 1; i++) {
    if (countries[i][1] === countries[i + 1][1]) {
      count++;
      end++;
      if (count === 1) {
        start = i;
      }
    } else {
      count = 0;
    }
    if (start !== end) {
      console.log(start, end);
      compareMedals(countries, start, end, "Silver");
    }
  }
};

const [N, K] = input
  .shift()
  .split(" ")
  .map((x) => +x);

const countries = [];
input.forEach((country) => {
  const countryArray = country.split(" ").map((x) => +x);
  countries.push(countryArray);
});

checkGoldMedal(countries, N);
checkSilverMedal(countries, N);

console.log(countries);
