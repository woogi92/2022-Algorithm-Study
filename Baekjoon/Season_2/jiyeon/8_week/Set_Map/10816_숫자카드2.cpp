#include <iostream>
#include <map>

using namespace std;

int main()
{
    // 입출력 시간 단축
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    
    int n;
    cin >> n;

    map<int, int> cards;
    for(int i = 0; i < n; i++)
    {
        int cardNum;
        cin >> cardNum;
        
        cards[cardNum]++;
    }

    int m;
    cin >> m;
    for(int i = 0; i < m; i++)
    {
        int checkNum;
        cin >> checkNum;
        cout << cards[checkNum] << " ";
    }

    return 0;
}