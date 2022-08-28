#include <iostream>
#include <map>
#include <string>

using namespace std;

void GetStateWar()
{
    int soldierCount;      // 각 땅의 병사 수
    cin >> soldierCount;

    long armyNum;           // 군대 번호
    map<long, int> armySize; // 현재 땅의 각 군대 규모
    int winCondition = soldierCount/2;

    for(int i = 0; i < soldierCount; i++)
    {
        cin >> armyNum;
        armySize[armyNum]++;
    }

    for(auto iter = armySize.begin(); iter != armySize.end(); ++iter)
    {
        if((iter -> second) > winCondition)
        {
            cout << iter -> first << "\n";
            return;
        }
    }

    cout << "SYJKGW\n";
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;      // 땅의 개수
    cin >> n;

    for(int i = 0; i < n; i++)
    {
        GetStateWar();
    }
    return 0;
}