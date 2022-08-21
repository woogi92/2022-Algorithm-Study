#include <iostream>
#include <vector>
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

    // 듣도 못한 사람들 명단 입력 받고 사전 순으로 정렬
    vector<string> unheards, hearsay;
    string name;
    for(int i = 0; i < n; i++)
    {
        cin >> name;
        unheards.push_back(name);
    }
    sort(unheards.begin(), unheards.end());

    // 보도 못한 사람들 명단 입력 받아서 이진 탐색 진행
    for(int i = 0; i < m; i++)
    {
        cin >> name;
        if(binary_search(unheards.begin(), unheards.end(), name))
        {
            hearsay.push_back(name);
        }
    }

    // 듣도 보도 못한 사람들 명단 사전 순으로 정렬
    sort(hearsay.begin(), hearsay.end());

    // 결과 출력
    cout << hearsay.size() << "\n";
    for(string name: hearsay)
    {
        cout << name << "\n";
    }
    
    return 0;
}
