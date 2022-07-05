#include <iostream>

using namespace std;

static int count = 0;

// 새로운 수로 만들어 3의 배수 확인한 결과 출력하는 함수
bool ConversionNumber(string x)
{
  int sum = 0;
  for(int i = 0; i <x.size(); i++)
  {
    sum += (int)(x[i] - '0');
  }
  count++;

  if(sum < 10)
  { 
    if(sum % 3 == 0) return true;
    else return false;
  } 

  return ConversionNumber(to_string(sum));
}

int main()
{
  string x;                      // 큰 자연수 X

  getline(cin, x);

  bool ans = ConversionNumber(x);

  // 결과 출력
  cout << count << "\n";
  if(ans) cout << "YES";
  else cout << "NO";

  return 0;
}