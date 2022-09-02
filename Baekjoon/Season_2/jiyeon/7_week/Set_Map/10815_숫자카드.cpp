#include <iostream>
#include <map>

using namespace std;

int main()
{
    // 입출력 시간 단축
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int n;      // 상근이가 갖고 있는 숫자 카드 수 
    cin >> n;

    
    map<int, int> cardNum;  // 숫자 카드에 적힌 정수(중복 X)
    for(int i = 0; i < n; i++)
    {
        int num;
        cin >> num;
        cardNum[num]++;
    }

    int m;              // 체크할 숫자 개수 M
    cin >> m;
    
    for(int i = 0; i < m; i++)
    { 
        int checkNum;   // 체크할 정수
        cin >> checkNum;

        cardNum[checkNum]++;

        // 출력
        // 상근이가 가지고 있는 숫자 카드면 1, 아니면 0 출력
        if(cardNum[checkNum] > 1)
        {
            cout << "1\n";
        }
        else
        {
            cout << "0\n";
        }
    }

    return 0;
}