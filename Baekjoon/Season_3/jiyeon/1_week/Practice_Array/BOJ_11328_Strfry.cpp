#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;
    while(n--)
    {
        string s1, s2;
        cin >> s1 >> s2;

        int s1Freq[26] = {0};
        int s2Freq[26] = {0};
        bool isPossible = true;
        if(s1.size() == s2.size())
        {
            for(auto c: s1)
            {
                s1Freq[c-'a']++;
            }
            for(auto c: s2)
            {
                s2Freq[c-'a']++;
            }
            for(int i = 0; i < 26; i++)
            {
                if(s1Freq[i] != s2Freq[i]) {
                    isPossible = false;
                    break;
                }
            }
        } else {
            isPossible = false;
        }

        if(isPossible)
            cout << "Possible\n";
        else
            cout << "Impossible\n";
    }

    
    return 0;
}