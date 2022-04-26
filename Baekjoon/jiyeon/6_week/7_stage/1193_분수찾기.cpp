#include <iostream>
using namespace std;

int main()
{
    
    int n;
    int i = 1;

    cin >> n;

    // n이 속한 행 찾기
    while(n > i)
    {        
       n -= i;
       i++;
    }

    if(i %2 == 1)   // 홀수행
    {
        cout << i + 1 - n << "/" << n;
    }
    else            // 짝수행
    {
        cout << n << "/" << i + 1 - n;
    }

    return 0;
}