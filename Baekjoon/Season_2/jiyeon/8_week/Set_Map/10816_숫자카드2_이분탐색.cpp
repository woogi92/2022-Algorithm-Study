#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int GetFirstAppearIdx(vector<int> &cards, int checkNum)
{
    int start = 0;
    int end = (int)cards.size();
    int mid = 0;

    while(end > start)
    {
        mid = (start + end)/2;
        if(checkNum > cards[mid])
        {
            start = mid + 1;
        }
        else
        {
            end = mid;
        }
    }
    return end + 1;
}

int GetLastAppearIdx(vector<int> &cards, int checkNum)
{
    int start = 0;
    int end = (int)cards.size();
    int mid = end;

    while(end > start)
    {
        mid = (start + end)/2;
        if(checkNum >= cards[mid])
        {
            start = mid + 1;
        }
        else
        {
            end = mid;
        }
    }

    return end + 1;
}

int SearchCardCount(vector<int> &cards, int checkNum)
{
    int firstAppearIdx = GetFirstAppearIdx(cards, checkNum);       // 제일 처음 등장하는 위치
    int lastAppearIdx = GetLastAppearIdx(cards, checkNum);        // 제일 나중에 등장하는 위치

    return lastAppearIdx - firstAppearIdx;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin >> n;

    vector<int> cards;
    for(int i = 0; i < n; i++)
    {
        int cardNum;
        cin >> cardNum;
        cards.push_back(cardNum);
    }

    sort(cards.begin(), cards.end());

    int m;
    cin >> m;

    for(int i = 0; i < m; i++)
    {
        int checkNum;
        cin >> checkNum;
        cout << SearchCardCount(cards, checkNum) << " ";
    }
    return 0;
}