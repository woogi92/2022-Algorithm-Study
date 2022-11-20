#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    string s1, s2;
    cin >> s1 >> s2;

    int a1[26] = {0};
    int a2[26] = {0};
    for(auto c:s1) a1[c-'a']++;
    for(auto c:s2) a2[c-'a']++;

    int ans = 0;
    for(int i = 0; i < 26; i++)
    {
        if(a1[i] != a2[i])
        {
            if(a1[i] > a2[i])
                ans += a1[i] - a2[i];
            else    
                ans += a2[i] - a1[i];
        }
    }
    cout <<ans;
    return 0;
}