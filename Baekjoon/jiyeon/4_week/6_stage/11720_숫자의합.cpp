#include <iostream>
#include <string>
using namespace std;

int main()
{
    int n;
    string num;
    int sum = 0;

    cin >> n;
    cin >> num;

    for(int i = 0; i < n; i++)
    {
        sum += (int)num.at(i) - 48;
    }

    cout << sum;

    return 0;
}
