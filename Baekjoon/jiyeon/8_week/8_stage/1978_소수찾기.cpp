#include <iostream>

using namespace std;

bool CheckPrimeNumber(int num)
{
    bool isPrimeNumber = true;

    if(num == 1)
    {
        isPrimeNumber =  false;
    }

    for(int i = 2; i < num - 1; i++)
    {
        if(num % (num-i) == 0)
        {
            isPrimeNumber = false;
            break;
        }
    }

    return isPrimeNumber;
}

int main()
{
    int testCase;
    int count = 0;

    cin >> testCase;

    for(int i = 0; i < testCase; i++)
    {
        int num;
        cin >> num;
        
        if(CheckPrimeNumber(num))
        {
            count++;
        }
    }

    cout << count;

    return 0;
}