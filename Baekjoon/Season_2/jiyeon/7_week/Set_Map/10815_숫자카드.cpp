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

// 처음에 입출력 단축 시키는 코드 안넣어서 시간초과 뜸
// -> 입출력 시간 단축시키는 코드 공부
// map을 이상하게 썼는지 틀렸다고 나옴 ㅇㅅㅇ
// 현재 코드가 내부에서 어떻게 저장되는지 문법적으로 확인할 필요 있음
