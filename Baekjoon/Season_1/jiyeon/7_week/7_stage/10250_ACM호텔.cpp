#include <iostream>

using namespace std;

// 배정받은 방 번호를 구하는 함수
int GetAssignedRoom(int h, int w, int n)
{
    int roomNum = 1;    // 방 번호
    int floor = 1;      // 층수
    
    // 손님들 방 배정
    for(int count = 1; count < n; count++)
    {
        if(floor < h)
            floor += 1;
        else
        {
            roomNum += 1;
            floor = 1;
        }
    }

    // n번째 손님이 배정받은 방 번호
    int assignedRoom = floor * 100 + roomNum;

    return assignedRoom;
}

int main()
{
    int testCase;   // 테스트케이스
    int h, w, n;    // 호텔의 층, 방개수, 손님 순서

    cin >> testCase;

    for(int i = 0; i < testCase; i++)
    {
        cin >> h >> w >> n;
        cout << GetAssignedRoom(h, w, n) << "\n";

    }

    return 0;
}