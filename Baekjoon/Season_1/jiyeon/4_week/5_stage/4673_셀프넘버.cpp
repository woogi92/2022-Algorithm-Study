#include <iostream>

using namespace std;

int GetNotSelfNum(int n)
{
    int sum = n;
    while(n > 0) 
    {
        sum += n % 10;
        n = n / 10;
    }
    return sum;
}

bool isSelfNum[10000];

int main()
{
    int n = 10000;
    fill_n(isSelfNum, 10000, true);

    for(int i = 1; i < n; i++)
    {
        int idx = GetNotSelfNum(i);
        isSelfNum[idx] = false;
        
        if(isSelfNum[i])    
        {
            cout << i << "\n";
        }
    }

    return 0;
}

