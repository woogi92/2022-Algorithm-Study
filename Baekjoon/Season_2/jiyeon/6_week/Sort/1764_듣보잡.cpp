#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

int main()
{
    // 입출력 시간 단축
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    // 입력
    int n, m;
    cin >> n >> m;

    map<string, int> tmpNames;
    vector<string> hearsay;
    for(int i = 0; i < n + m; i++)
    {
        string name;
        cin >> name;
        tmpNames[name]++;
        if(tmpNames[name] > 1)
        {
            hearsay.push_back(name);
        }
    }

    // 사전 순으로 정렬
    sort(hearsay.begin(), hearsay.end());

    // 결과 출력
    cout << hearsay.size() << "\n";
    for(string name: hearsay)
    {
        cout << name << "\n";
    }
    
    return 0;
}
