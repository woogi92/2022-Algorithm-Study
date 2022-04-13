#include <iostream>
#include <string>
#include <math.h>

using namespace std;

int main()
{
    string input;
    string tmp = "" ;
    int num[2] = {0,0};

    for(int i = 0; i < 2; i++)
    {
        cin >> input;
        int digit = 2;
        for(int j = input.length()-1; j >= 0; j--)
        {
            num[i] += ((int)input.at(j) - 48) * pow(10,digit);
            digit--;
        }
    }

    if(num[0] < num[1])
    {
        cout << num[1];
    }
    else 
    {
         cout << num[0];
    }
    
    return 0;
}