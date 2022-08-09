#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(string a, string b)
{
    if (a.size() == b.size())
        return a < b;
    else   
        return a.size() < b.size();
}

int main()
{
    int n;          // 단어의 개수
    vector<string> words;
 
    // 입력
    cin >> n;
    
    for(int i = 0; i < n; i++)
    {
        string word;
        cin >> word;
        words.push_back(word);
    }
    
    // 정렬
    sort(words.begin(), words.end(), compare);

    // 출력
    for(int i = 0; i < n; i++)
    {
        if(words[i] == words[i+1])
        {
            continue;   
        }
        else
        {
            cout << words[i] << "\n";
        }
    }

    return 0;
}