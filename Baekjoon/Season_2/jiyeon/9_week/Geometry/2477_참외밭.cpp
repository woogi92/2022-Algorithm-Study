#include <iostream>
#include <map>

using namespace std;

int unitNum;                    // 1m^2에 자라는 참외의 개수
int direction[7], length[7];    // 밭 전체의 방향과 길이
map<int, int> uniqueLength;     // 큰 사각형의 길이 (방향, 길이)
int area;

void Input()
{
    cin >> unitNum;
    
    for(int i = 0; i < 6; i ++)
    {
        cin >> direction[i] >> length[i];
        uniqueLength[direction[i]] = length[i];
    } 

    direction[6] = direction[0];
    length[6] = length[0];
}

void GetArea()
{
    for(int i = 0; i < 6; i++)
    {
        int first = direction[i];
        int second = direction[i+1];

        // ㄱ(1-3)
        if(first==1 && second==3)
        {
            area = uniqueLength[4] * uniqueLength[2] - (length[i] * length[i+1]);
            break;
        }
        //┏(4-1)
        if(first == 4 && second == 1)
        {
            area = uniqueLength[3] * uniqueLength[2] - (length[i] * length[i+1]);
            break;
        }
        // ┗(2-4)
        if(first == 2 && second == 4)
        {
            area = uniqueLength[3] * uniqueLength[1] - (length[i] * length[i+1]);
            break;
        }
        //  ┛(3-2)
        if(first == 3 && second == 2)
        {
            area = uniqueLength[1] * uniqueLength[4] - (length[i] * length[i+1]);
            break;
        }
    }
}

int main()
{    
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    
    // 입력
    Input();

    // 밭 전체 넓이 구하기
    GetArea();
    
    // 결과 출력
    cout << area * unitNum;
    return 0;;
}