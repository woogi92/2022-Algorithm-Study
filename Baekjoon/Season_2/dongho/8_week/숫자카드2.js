/*
  1. 입력값 받기
  2. 핸드 카드 오름차순 정렬
  3. 이분탐색
  4. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const binarySeach = (handCards, checkCard, start, end) => {
  const mid = Math.floor((start + end) / 2); // 중간 인덱스
  // 함수 종료조건
  if (handCards[mid] === checkCard) {
    let count = 1;
    let index = mid;

    while (index > 0 && index < handCards.length) {
      if (handCards[--index] === checkCard) {
        count++;
      } else {
        break;
      }
    }
    index = mid;
    while (index > 0 && index < handCards.length) {
      if (handCards[++index] === checkCard) {
        count++;
      } else {
        break;
      }
    }
    output += `${count} `;
    return;
  }
  if (start >= end) {
    output += `0 `;
    return;
  }

  // 좌측 탐색
  if (handCards[mid] > checkCard) {
    binarySeach(handCards, checkCard, start, mid - 1);
  }
  // 우측 탐색
  if (handCards[mid] < checkCard) {
    binarySeach(handCards, checkCard, mid + 1, end);
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

// 3. 이분탐색
let output = ""; // 출력값 저장
checkCards.forEach((checkCard) => {
  binarySeach(handCards, checkCard, 0, N - 1);
  // 매개변수(검색할 배열, 찾을 숫자, 배열의 첫 인덱스, 배열의 끝 인덱스)
});

// 4. 출력
console.log(output.trim());
