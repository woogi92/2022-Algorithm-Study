let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const findCountry = (countries, K) => {
  let count = 0;
  while (countries[count][0] !== K) {
    count++;
  }
  return count;
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

const k = findCountry(countries, K);

let rank = 1;

for (let i = 0; i < N; i++) {
  if (countries[i][1] > countries[k][1]) {
    rank++;
  } else if (countries[i][1] === countries[k][1]) {
    if (countries[i][2] > countries[k][2]) {
      rank++;
    } else if (countries[i][2] === countries[k][2]) {
      if (countries[i][3] > countries[k][3]) {
        rank++;
      }
    }
  }
}

console.log(rank);
