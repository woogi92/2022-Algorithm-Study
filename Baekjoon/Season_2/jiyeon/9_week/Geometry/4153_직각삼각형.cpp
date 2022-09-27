#include <iostream>

using namespace std;

int main()
{
    while(1)
    {
        int a, b, c;
        cin >> a >> b >> c;

        if(a==0 && b==0 && c==0)
        {
            break;
        }

        if(b < c)
        {
            int tmp = b;
            b = c;
            c = tmp;
        }
        if(a < b)
        {
            int tmp = a;
            a = b;
            b = tmp;
        }

        if(a*a == b*b + c*c)
        {
            cout << "right\n";
            continue;
        }
        else
        {
            cout << "wrong\n";
        }
    }

    return 0;
}