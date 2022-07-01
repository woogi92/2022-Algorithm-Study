#include <iostream>
#include <cmath>
using namespace std;

bool CheckPrimeNumber(int num)
{
    if(num == 1)
    {
        return false;
    }
    for(int i = 2; i <= sqrt(num); i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int start, end;

    cin >> start >> end;

    for(int i = start; i <= end; i++)
    {
        if(CheckPrimeNumber(i))
        {
            cout << i << "\n";
        }
    }
    return 0;
}