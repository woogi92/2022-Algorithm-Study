#include <iostream>

using namespace std;

int main()
{
    int n;
    int floor = 0;      // 중앙으로 부터의 거리 (중앙 = 1층)
    int roomCount = 1;  // 해당 층의 방 개수
    int lastNum = 1;    // 해당 층의 마지막 방 번호

    cin >> n;

    while(1)
    {  
        floor += 1;
        roomCount = (floor - 1) * 6;
        lastNum += roomCount;

        if(n <= lastNum)
        {
            cout << floor;
            break;
        }
       
       
    }

    

    return 0;
}