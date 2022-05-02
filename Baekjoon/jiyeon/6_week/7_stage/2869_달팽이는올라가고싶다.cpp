#include <iostream>

using namespace std;

int main()
{
    int a, b, v;

    cin >> a >> b >> v;

    int day = ((v - b - 1) / (a - b)) + 1;

    /* 풀려했지만 실패한 내 코드
    int up = a * day - b * (day -1); // 전날 올라간 거리
   
    while(1)
    {
        if(up >= v)
        {
            break;
        }
        up -= b;
        day++;
        up += a;        
    }
    */
  
    cout << day;
    return 0;
}