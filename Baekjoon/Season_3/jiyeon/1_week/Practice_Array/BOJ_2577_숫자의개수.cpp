#include <bits/stdc++.h>
using namespace std;

int freq[10];
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int a, b, c;
    cin >> a >> b >> c;

    int num = a * b * c;
    string strNum = to_string(num);

    for(auto c: strNum)
    {
        freq[c-'0']++;
    }

    for(int i = 0; i < 10; i++)
    {
        cout << freq[i] <<"\n";
    }

    return 0;
}