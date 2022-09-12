#include <bits/stdc++.h>
#include <unordered_map>

using namespace std;

bool compare(const pair<string, int>& a, const pair<string, int>& b)
{
    return a.second < b.second;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int k, l;
    cin >> k >> l;

    unordered_map<string, int> waitingList;   // 학번, 인덱스
    for(int i = 0; i < l; i++)
    {
        string studentID;
        cin >> studentID;

        waitingList[studentID] = i;
    }

    vector<pair<string, int>> successList;
    for(auto& i : waitingList)
    {
        successList.push_back(i);
    }

    sort(successList.begin(), successList.end(), compare);

    for(int i = 0; i < min(k, (int)successList.size()); i++)
    {
        cout << successList[i].first << "\n";
    }

    return 0;
}