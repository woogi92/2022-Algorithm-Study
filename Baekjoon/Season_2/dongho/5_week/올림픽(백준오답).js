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
  for (let i = 0; i < N - 1; i++) {
    if (countries[i][1] === countries[i + 1][1]) {
      count++;
      if (count === 1) {
        start = i;
      }
    } else {
      compareMedals(countries, start, i, "Silver");
      start = i + 1;
      count = 0;
    }
    if (i + 1 === N - 1) {
      if (count > 0) {
        compareMedals(countries, start, N - 1, "Silver");
      }
    }
  }
};

const checkBronzeMedal = (countries, N) => {
  let count = 0;
  let start = 0;
  for (let i = 0; i < N - 1; i++) {
    if (
      countries[i][1] === countries[i + 1][1] &&
      countries[i][2] === countries[i + 1][2]
    ) {
      count++;
      if (count === 1) {
        start = i;
      }
    } else {
      compareMedals(countries, start, i, "Bronze");
      start = i + 1;
      count = 0;
    }
    if (i + 1 === N - 1) {
      if (count > 0) {
        compareMedals(countries, start, N - 1, "Bronze");
      }
    }
  }
};

const getRank = (countries, N, K) => {
  let rank = 1;
  const tmp = [];
  let sameRankCount = 0;

  // 배열 비교를 편하게 하기 위해 국가 번호 제거
  for (let i = 0; i < N; i++) {
    if (countries[i][0] === K) {
      countries[i].shift();
      tmp.push(countries[i]);
      break;
    }
    countries[i].shift();
    tmp.push(countries[i]);
  }

  // 메달의 수가 모두 같은 나라 개수 세기
  for (let i = 0; i < tmp.length - 1; i++) {
    if (tmp[i].toString() === tmp[i + 1].toString()) {
      sameRankCount++;
    }
  }

  return tmp.length - sameRankCount;
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
checkBronzeMedal(countries, N);
console.log(countries);
const rank = getRank(countries, N, K);
console.log(rank);
