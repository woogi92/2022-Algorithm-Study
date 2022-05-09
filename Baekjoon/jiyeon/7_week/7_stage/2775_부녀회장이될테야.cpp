#include <iostream>

using namespace std;

// 재귀함수를 사용했을 때의 코드

int getNum(int k, int n){
  if(n == 1)
    return 1;
  if(k == 0)
    return n;
  return (getNum(k-1, n) + getNum(k, n-1));
}

int main() {
  int T, k, n;
  cin>>T;
  for(int i=0; i<T; i++){
    cin>>k>>n;
    cout<<getNum(k, n)<<'\n';
  }
}