#include <stdio.h>

int main()
{
    int year;

    scanf("%d", &year);

    // 윤년일 경우 1, 아닐경우 
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        printf("1");
    } else {
        printf("0");
    }

    return 0;
}