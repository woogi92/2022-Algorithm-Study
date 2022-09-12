/*
  1. 입력값 받기
  2. 핸드 카드 오름차순 정렬
  3. Upper Bound, Lower Bound 알고리즘을 이용해 인덱스 값 구하기
  4. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

// Lower Bound: checkCard보다 큰 첫번째 위치(초과)를 반환
const lowerBound = (handCards, checkCard, start, end) => {
  if (start >= end) {
    low = end;
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (handCards[mid] >= checkCard) {
    lowerBound(handCards, checkCard, start, mid);
  } else {
    lowerBound(handCards, checkCard, mid + 1, end);
  }
};

// Upper Bound: checkCard보다 크거나 같은 첫번째 위치(이상)를 반환
const upperBound = (handCards, checkCard, start, end) => {
  if (start >= end) {
    if (handCards[end] === checkCard) {
      end++;
    }
    up = end;
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (handCards[mid] > checkCard) {
    upperBound(handCards, checkCard, start, mid);
  } else {
    upperBound(handCards, checkCard, mid + 1, end);
  }
};

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

// 2. 핸드 카드 오름차순 정렬
handCards.sort((a, b) => a - b);

// 3. Upper Bound, Lower Bound 알고리즘을 이용해 인덱스 값 구하기
let output = ""; // 출력값 저장
let low;
let up;
checkCards.forEach((checkCard) => {
  lowerBound(handCards, checkCard, 0, N - 1);
  upperBound(handCards, checkCard, 0, N - 1);
  output += `${up - low} `;
  // 매개변수(검색할 배열, 찾을 숫자, 배열의 첫 인덱스, 배열의 끝 인덱스)
});

// 4. 출력
console.log(output.trim());
