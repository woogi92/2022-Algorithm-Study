#include <iostream>
#include <vector>
#include <set>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int k, l;
    cin >> k >> l;

    vector<string> waitingList;
    vector<string> result;
    set<string> checkList;

    for(int i = 0; i < l; i++)
    {
        string studentID;
        cin >> studentID;
        waitingList.push_back(studentID);
    }

    for(int i = l - 1; i >= 0; --i)
    {
        string tmp = waitingList[i];
        if(checkList.find(tmp) == checkList.end())
        {
            checkList.insert(tmp);
            result.push_back(tmp);
        }
    }

    int size = (int)result.size();
    for(int i = size - 1; i >= 0 && i >= size - k; --i)
    {
        cout << result[i] << "\n";
    }

    return 0;
}