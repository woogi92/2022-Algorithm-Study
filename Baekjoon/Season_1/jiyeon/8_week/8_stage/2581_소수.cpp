#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int m, n;
    cin >> m >> n;

    int primeNumSum = 0;        // 소수들의 합
    int minPrimeNum = 10000;    // 가장 작은 소수
    int checkCount = 0;         // 나누어 떨어지는 수의 개수 (소수면 1과 자기자신으로 2개)
    int primeNumCount = 0;      // 소수 개수

    for(int i = m; i <= n; i++)
    {
        // 나누어 떨어지는 수의 개수 초기화
        checkCount = 0;

        // 나누어 떨어지는 수의 개수 세기
        for(int j = 1; j <= i; j++)
        {
            if(i % j == 0)
            {
                checkCount++;
            }
            
        } 

        // 소수일 경우
        if(checkCount == 2)
        {
            primeNumSum += i;
            if(i < minPrimeNum)
            {
                minPrimeNum = i;
            }
            primeNumCount++;
        }  
    }
   
    // 영역 내에 소수가 없을 경우
    if(primeNumCount == 0)
    {
        cout << "-1";
    }
    else
    {
        cout << primeNumSum << "\n" << minPrimeNum;
        cout << primeNumCount;
    }    
    
    return 0;
}