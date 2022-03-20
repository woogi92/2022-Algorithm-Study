#include <stdio.h>

int main()
{
    int a, b, c, result;
    
    scanf("%d %d %d", &a, &b, &c);

    if(a == b && b == c) {
        result = 10000 + a * 1000;
    } else if(a == b) {
        result = 1000 + a * 100;
    } else if(b == c) {
        result = 1000 + b * 100;
    } else if(a == c) {
        result = 1000 + c * 100;
    } else {
        int max = a;
        if (max < b) {
            max = b;
        } if (max < c) {
             max = c;
        } result = max * 100;
    }

    printf("%d", result);
    return 0;
}