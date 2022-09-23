#include <iostream>
#include <cmath>

using namespace std;

int w, h, x, y, p;

bool CheckInSquare(int px, int py)
{
    if(x <= px && px <= x+w)
    {
        if(y <= py && py <= y+h)
        {
            return true;
        }
    }
    return false;
}

bool CheckInCircle(int px, int py)
{
    double condition = pow(h/2,2);

    // 왼쪽 원안에 있는지 확인
    if(pow(x-px,2) + pow(y+h/2-py,2) <= condition)
    {
        return true;
    }
    // 오른쪽 원안에 있는지 확인
    if(pow(x+w-px,2) + pow(y+h/2-py,2) <= condition)
    {
        return true;
    }
    return false;
}

int main()
{
    int cnt = 0;
    cin >> w >> h >> x >> y >> p;

    for(int i = 0; i < p; i++)
    {
        int px, py;
        cin >> px >> py;
        if(CheckInSquare(px, py) || CheckInCircle(px, py)) cnt++;
    }

    cout << cnt;
    
    return 0;
}