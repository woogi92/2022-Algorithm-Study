#include <iostream>

using namespace std;

// x의 각 자리수를 덧셈해 반환하는 함수
int AddEachDigit(int x)
{
  int sum = 0;
  
  while(x > 0)
  {
    sum += x % 10;
    x /= 10;
  }

  return sum;
}

// 새로운 수로 만들어 3의 배수 확인한 결과 출력하는 함수
bool ConversionNumber(int num, int &count)
{
  num = AddEachDigit(num);
  count++;

  if(num < 10)
  { 
    if(num % 3 == 0) return true;
    else return false;
  } 

  return ConversionNumber(num, count);
  }

int main()
{
  string x;                      // 큰 자연수 X

  getline(cin, x);

  // 10^6자리 수가 들어올 경우를 대비
  int sum = 0;
  for(int i = 0; i < x.size(); i++)
  {
    sum += (int)(x[i] - '0');
  }

  // 입력받은 수로 부터 새로운 수 y만들기
  int count = 1;
  bool ans = ConversionNumber(sum, count);

  // 결과 출력
  if(x.size() < 2) cout << 0 << "\n";
  else cout << count << "\n";
  if(ans) cout << "YES";
  else cout << "NO";

  return 0;
}