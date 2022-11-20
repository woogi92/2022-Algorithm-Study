#include <bits/stdc++.h>
using namespace std;

int positive[101];
int negative[100];
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;
    while(n--)
    {
        int num;
        cin >> num;
        if(num >= 0)
            positive[num]++;
        else    
            negative[-num]++;
    }

    int v;
    cin >> v;
    if(v >= 0)
        cout << positive[v];
    else    
        cout << negative[-v];
    return 0;
}