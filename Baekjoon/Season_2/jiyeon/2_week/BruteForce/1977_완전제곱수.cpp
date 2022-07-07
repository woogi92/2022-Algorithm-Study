// 입력: M과 N (M <= N <= 10000)
// 출력: M이상 N이하의 자연수 중 완전제곱수 합, 최소값
// 완전 제곱수가 없을 경우 -1 출력

#include <iostream>
#include <list>

using namespace std;

int main()
{
    int m, n;
    int sum = 0;
    int checkNum = 1;
    list<int> perfectSquares;

    cin >> m >> n;

    // 완전제곱수 구하기
    while(1)
    {
        int checkSquare = checkNum * checkNum;
        if(checkSquare > n)
        {
            break;
        }
        if(m <= checkSquare && checkSquare <= n)
        {
            sum += checkSquare;
            perfectSquares.push_back(checkSquare);
        }
        checkNum++;
    }

    // 결과 출력
    if(perfectSquares.size() == 0)
    {
        cout << -1;
    }
    else
    {
        cout << sum << "\n";
        cout << perfectSquares.front();
    }
    return 0;
}