/*
  1. 입력값 받기
  2. Map 객체를 사용해 책 판매 개수 구하기
  3. 3. Map 객체를 배열로 변환한 뒤, 책 판매량(value)을 기준으로 내림차순
  4. filter() 메소드를 사용해 가장 많이 팔린 책(들)만 남기기
  5. 책 이름(key)을 기준으로 오름차순
  6. 출력
*/
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 1. 입력값 받기
const N = input.shift();
const [...books] = input;

// 2. Map 객체를 사용해 책 판매 개수 구하기
// Key: 책 이름, Value: 책 판매량
const booksMap = new Map();
books.forEach((book) => {
  // 이미 책이 팔린적이 있었다면 value 값 1 증가
  if (booksMap.has(book)) {
    const bookNum = booksMap.get(book);
    booksMap.set(book, bookNum + 1);
  }
  // 처음 책이 팔렸다면 value 값 1로 새로 생성
  else {
    booksMap.set(book, 1);
  }
});

// 3. Map 객체를 배열로 변환한 뒤, 책 판매량(value)을 기준으로 내림차순
const sortedBooks = [...booksMap].sort((a, b) => b[1] - a[1]);

// 4. filter() 메소드를 사용해 가장 많이 팔린 책(들)만 남기기
const bestSellNum = sortedBooks[0][1];
const bestSellerBooks = sortedBooks.filter((book) => book[1] === bestSellNum);

// 5. 책 이름(key)을 기준으로 오름차순
bestSellerBooks.sort();

// 6. 출력
console.log(bestSellerBooks[0][0].trim());
