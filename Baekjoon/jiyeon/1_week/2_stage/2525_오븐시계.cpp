#include <stdio.h>

int main()
{
    int currentH, currentM, needM;
    int resultH, resultM;

    scanf("%d %d %d", &currentH, &currentM, &needM);

    resultM = (currentM + needM) % 60;
    resultH = currentH + (currentM + needM)/60; 

    if(resultH >= 24) {
        resultH -= 24;
    }

    printf("%d %d", resultH, resultM);

    return 0;
}