/*
1. 큰 사각형 가로변, 세로변 길이 구하기
2. 빈 사각형 가로변, 세로변 길이 구하기
3. 참외밭 넓이 구하기
4. 참외의 수 구하기
*/

const [K, ...input] = require("fs")
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 1. 큰 사각형 가로변, 세로변 길이 구하기
let dirArray = []; // 방향, 거리를 저장할 배열
let longWidthIndex = 0; // 가장 긴 가로변 길이 인덱스
let longWidth = 0; // 가장 긴 가로변 길이
let longHeightIndex = 0; // 가장 긴 세로변 길이 인덱스
let longHeight = 0; // 가장 긴 세로변 길이

input.forEach((move, index) => {
  // 가로(동쪽, 서쪽) - 1,2 / 세로(남쪽, 북쪽) - 3,4
  const [dir, length] = move.split(" ").map((x) => +x); // 방향, 거리
  dirArray.push([dir, length]);
  // 가로변 탐색
  if (dir === 1 || dir === 2) {
    if (length > longWidth) {
      longWidth = length;
      longWidthIndex = index;
    }
  }
  // 세로변 탐색
  else if (dir === 3 || dir === 4) {
    if (length > longHeight) {
      longHeight = length;
      longHeightIndex = index;
    }
  }
});

// 2. 빈 사각형 가로변, 세로변 길이 구하기
const shortHeightIndex = (longWidthIndex + 3) % 6;
const shortWidthIndex = (longHeightIndex + 3) % 6;
const shortHeight = dirArray[shortHeightIndex][1];
const shortWidth = dirArray[shortWidthIndex][1];
const melon = Number(K);

// 3. 참외밭 넓이 구하기
// (긴 가로변 * 긴 세로변) - (빈 사각형 가로변 - 빈 사각형 세로변)
const area = longWidth * longHeight - shortWidth * shortHeight;

// 4. 참외의 수 구하기
console.log(area * melon);
