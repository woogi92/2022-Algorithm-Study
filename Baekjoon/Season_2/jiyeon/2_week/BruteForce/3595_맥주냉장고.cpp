#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

int main()
{
    int n;          // 냉장고 용량
    cin >> n;

    int x, y, h;    // 냉장고 밑면의 가로, 세로 길이, 높이
    vector<string> xyh;
    vector<int> surfaceAreas;   // 냉장고 겉넓이

    // x,y,h 조합별 겉넓이 구하기
    for(x = sqrt(n); x >= 1; x--)
    {
        for(y = sqrt(n); y >= 1; y--)
        {
            h = (n/x)/y;
            if((x * y)* h == n)
            {
                string tmp = to_string(x) + " " + to_string(y) + " " + to_string(h);
                xyh.push_back(tmp);
                int surfaceArea = 2*(x*y + y*h + x*h);
                surfaceAreas.push_back(surfaceArea);
            }
        }
    }
    
    // 겉넓이가 최소일 때의 조합 구하기
    int minIdx = 0;
    int minAreas = surfaceAreas.front();
    for(int i = 0; i < surfaceAreas.size(); i++)
    {
        if(surfaceAreas[i] < minAreas)
        {
            minAreas = surfaceAreas[i];
            minIdx = i;
        }
    }

    // 결과 출력
    cout << xyh[minIdx];
    

    return 0;
}