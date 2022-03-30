#include <stdio.h>

int main()
{
    int a, b;
 
    while( scanf("%d %d", &a, &b) != -1)
    {
        printf("%d\n", a+b);
    }

    return 0;
}


// iostream 사용
/*
#include <iostream>

using namespace std;

int main()
{
    int a, b;

    while(!(cin >> a >> b).eof())
    {
        cout << a + b << endl;
    }

    return 0;
}
*/