#include <bits/stdc++.h>
using namespace std;

int mGrades[7];
int fGrades[7];
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, k;
    cin >> n >> k;

    while(n--)
    {
        int s, grade;
        cin >> s >> grade;
        if(s) mGrades[grade]++;
        else fGrades[grade]++;
    }

    int ans = 0;
    for(auto cnt: mGrades)
    {
        ans += cnt/k;
        if(cnt%k != 0) ans++;
    }   
    for(auto cnt: fGrades)
    {
        ans += cnt/k;
        if(cnt%k != 0) ans++;
    }   
    cout << ans;
    
    return 0;
}