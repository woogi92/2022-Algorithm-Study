#include <iostream>
#include <cmath>

using namespace std;

double first_x, second_x, first_y, second_y, r1, r2, d;


void Input()
{
    cin >> first_x >> first_y >> r1 >> second_x >> second_y >> r2;
    d = sqrt(pow(second_x-first_x,2) + pow(second_y-first_y,2));
    if(r1 > r2)
    {
        double tmp = r2;
        r2 = r1;
        r1 = tmp;
    }
}

int GetIntersectionNum()
{
    // 무한히 만나는 경우 (동일)
    if(d==0 && r1==r2)
    {
        return -1;
    }
    // 만나지 않는 경우
    if((r1 + r2 < d) || (d < r2 - r1) || d == 0)
    {
        return 0;
    }
    // 한 점에서 만나는 경우
    if((r1 + r2 == d) || (r2- r1 == d))
    {
        return 1;
    }
    // 두 점에서 만나는 경우
    if((r2 - r1 < d) && (d < r1 + r2))
    {
        return 2;
    }
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int testCase;
    cin >> testCase;

    for(int i = 0; i < testCase; i++)
    {
        Input();
        cout << GetIntersectionNum() << "\n";
    }
    return 0;
}