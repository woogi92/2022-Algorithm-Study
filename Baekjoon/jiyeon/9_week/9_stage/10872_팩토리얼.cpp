#include <iostream>

using namespace std;

int GetFactorial(int num)
{
    if(num == 0 || num == 1)
    {
        return 1;
    }
    return GetFactorial(num-1) * num;
}

int main()
{
    int num;
    
    cin >> num;

    cout << GetFactorial(num);

    return 0;
}