#include <bits/stdc++.h>
using namespace std;

int freq[2000001];
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int n, x;
    int a[100001];

    cin >> n;
    for(int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    cin >> x;

    int result = 0;
    for(int i = 0; i < n; i++)
    {
        if(freq[a[i]] == 1)
            result ++;
        if(x > a[i])
            freq[x-a[i]] = 1;
    }

    cout << result;
    return 0;
}