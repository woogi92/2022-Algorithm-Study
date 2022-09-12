/*
  1. 입력값 받기
  2. Map.set() 메소드를 사용해서 카드 개수 세기
  3. Map.get() 메소드를 사용해서 카드 개수 불러오기
  4. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/User/Desktop/github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

// 1. 입력값 받기
const N = +input.shift(); // 1) 가지고 있는 숫자 카드의 개수
const handCards = input
  .shift()
  .split(" ")
  .map((x) => +x); // 2) 숫자 카드에 적혀있는 정수들
const M = +input.shift(); // 3) 가지고 있는지 체크할 숫자 카드의 개수
const checkCards = input
  .shift()
  .split(" ")
  .map((x) => +x); // 4) 체크할 숫자 카드에 적혀있는 정수들

// 2. Map.set() 메소드를 사용해서 카드 개수 세기
// Key값 -> 카드 숫자, Value값 -> 카드 개수
const cardNum = new Map();
handCards.forEach((card) => {
  if (cardNum.has(card)) {
    cardNum.set(card, cardNum.get(card) + 1);
  } else {
    cardNum.set(card, 1);
  }
});

// 3. Map.get() 메소드를 사용해서 카드 개수 불러오기
let output = "";
checkCards.forEach((card) => {
  const num = cardNum.get(card);
  if (num) output += `${num} `;
  else output += `0 `;
});

// 4. 출력
console.log(output);
