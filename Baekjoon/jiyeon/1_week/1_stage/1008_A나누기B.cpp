#include <stdio.h>

int main()
{
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%.9f", (double)a/b);
    return 0;
}

/* iostream사용하는 방법 (수정필요)
#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << a / b;
    return 0;
} */