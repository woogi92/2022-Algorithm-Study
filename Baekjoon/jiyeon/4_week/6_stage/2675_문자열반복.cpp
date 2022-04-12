#include <iostream>
#include <string>

using namespace std;

string repeat(char c, int count)
{
    string repeat;
    for(int i = 0; i < count; i++)
    {
        repeat += c;
    }

    return repeat;
}

int main()
{
    int t;
    string s;
    int r;

    cin >> t;

    for(int i = 0; i < t; i++)
    {
        string p = "";
        cin >> r >> s;
        for(int j = 0; j < s.length(); j++)
        {
            p.append(repeat(s.at(j), r));
        }
        cout << p << "\n";
    }

    return 0;
}