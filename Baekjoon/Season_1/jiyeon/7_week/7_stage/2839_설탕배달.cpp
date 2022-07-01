#include <iostream>

using namespace std;

int main() 
{
    int kg;
    cin >> kg;
    int a,b;
    a = kg/5; // 5kg 사용한 개수
    while(1)
    {
        if(a < 0)
        {
            cout << "-1";
            return 0;
        }
        if((kg-(5*a))%3 == 0)
        {
            b = (kg-(5*a))/3; // 3kg 사용한 개수
            break;
        }
        a--;
    }
    cout << a+b;
    return 0;
}