#include <iostream>
using namespace std;

int main()
{
    
    int n;
    int i = 1;

    cin >> n;

    // n이 속한 대각선 찾기
    while(n > i)
    {        
       n -= i;
       i++;
    }

    if(i %2 == 1)   // 홀수 대각선
    {
        cout << i + 1 - n << "/" << n;
    }
    else            // 짝수 대각선
    {
        cout << n << "/" << i + 1 - n;
    }

    return 0;
}