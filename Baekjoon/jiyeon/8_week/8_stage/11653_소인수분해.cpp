#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int n;
    cin >> n;

    int divisor = 2;

    while( n != 1)
    {
        if(n % divisor == 0)
        {
            cout << divisor << "\n";
            n /= divisor;
            divisor = 2;
        }
        else
        {
            divisor++;
        }
    }

    return 0;
}