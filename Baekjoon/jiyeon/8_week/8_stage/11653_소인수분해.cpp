#include <iostream>
#include <cmath>

using namespace std;

bool isPrimeNum(int n)
{
    if(n == 1)
    {
        return false;
    }
    for(int i = 2; i <= sqrt(n); i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int n;
    cin >> n;

    int divisor = 2;

    while( n != 1)
    {
        if(n % divisor == 0 && isPrimeNum(divisor))
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