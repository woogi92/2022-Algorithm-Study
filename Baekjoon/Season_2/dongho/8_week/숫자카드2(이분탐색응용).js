/*
  <틀린 방법>
  1. 입력값 받기
  2. 핸드 카드 오름차순 정렬
<<<<<<< Updated upstream:Baekjoon/Season_2/dongho/8_week/숫자카드2(이분탐색응용).js
  3. Upper Bound, Lower Bound 알고리즘을 이용해 인덱스 값 구하기
=======
  3. 이분탐색 후 위아래로 같은 수 일때 1씩 카운트를 늘림
>>>>>>> Stashed changes:Baekjoon/Season_2/dongho/8_week/숫자카드2.js
  4. 출력

  <맞은 방법>
  지금 코드가 시간 초과가 되는 이유만 말씀드리자면, 같은 원소가 엄청나게 많을 경우 이 코드는 한 지점에서 좌우로 엄청나게 많이 확인을 해야 할 것이고, 최악의 경우에는 원소 전체를 보게 될 것입니다. 이를 찾고자 하는 수의 개수만큼 반복하게 되면 약 2500억이니 절대로 시간 내에 통과될 수가 없습니다.
  lower buond와 upper bound는 이 문제를 해결해주는 기법입니다.
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

<<<<<<< Updated upstream:Baekjoon/Season_2/dongho/8_week/숫자카드2(이분탐색응용).js
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
=======
const lowerBound = (handCards, checkCard, start, end) => {
  const mid = Math.floor((start + end) / 2); // 중간 인덱스
  // 함수 종료조건
  if (start >= end) {
    output += `${end} `;
    return;
  }

  // 좌측 탐색
  if (handCards[mid] >= checkCard) {
    lowerBound(handCards, checkCard, start, mid);
  }
  // 우측 탐색
  else {
>>>>>>> Stashed changes:Baekjoon/Season_2/dongho/8_week/숫자카드2.js
    lowerBound(handCards, checkCard, mid + 1, end);
  }
};

<<<<<<< Updated upstream:Baekjoon/Season_2/dongho/8_week/숫자카드2(이분탐색응용).js
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
=======
const upperBound = (handCards, checkCard, start, end) => {
  const mid = Math.floor((start + end) / 2); // 중간 인덱스
  if (start >= end) {
    if (handCards[end] === checkCard) {
      output += `${end + 1} `;
      return;
    }
    output += `${end} `;
    return;
  }

  // 좌측 탐색
  if (handCards[mid] < checkCard) {
    upperBound(handCards, checkCard, start, mid);
  }
  // 우측 탐색
  else {
>>>>>>> Stashed changes:Baekjoon/Season_2/dongho/8_week/숫자카드2.js
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
console.log(handCards);

// 3. Upper Bound, Lower Bound 알고리즘을 이용해 인덱스 값 구하기
let output = ""; // 출력값 저장
let low;
let up;
checkCards.forEach((checkCard) => {
  lowerBound(handCards, checkCard, 0, N - 1);
<<<<<<< Updated upstream:Baekjoon/Season_2/dongho/8_week/숫자카드2(이분탐색응용).js
  upperBound(handCards, checkCard, 0, N - 1);
  output += `${up - low} `;
=======
  // 매개변수(검색할 배열, 찾을 숫자, 배열의 첫 인덱스, 배열의 끝 인덱스)
});
output += "\n";
checkCards.forEach((checkCard) => {
  upperBound(handCards, checkCard, 0, N - 1);
>>>>>>> Stashed changes:Baekjoon/Season_2/dongho/8_week/숫자카드2.js
  // 매개변수(검색할 배열, 찾을 숫자, 배열의 첫 인덱스, 배열의 끝 인덱스)
});

// 4. 출력
console.log(output.trim());
