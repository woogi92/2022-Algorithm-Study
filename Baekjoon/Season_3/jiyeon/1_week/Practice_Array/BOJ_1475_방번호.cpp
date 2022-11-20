#include <bits/stdc++.h>
using namespace std;

int freq[10];
int main()
{
    string n;
    cin >> n;

    for(auto c: n)
    {
        int num = c-'0';
        if(num == 6)
            num = 9;
        freq[num]++;
    }

    int max = freq[9]/2 + freq[9]%2;
    for(int i = 0; i < 9; i++)
    {
        if(freq[i] > max)
            max = freq[i];
    }

    cout << max;
    return 0;
}