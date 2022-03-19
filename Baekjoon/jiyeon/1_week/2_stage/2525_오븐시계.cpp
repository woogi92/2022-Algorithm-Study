#include <stdio.h>

int main()
{
    int startH, startM, needM;
    int endH, endM;

    scanf("%d %d", &startH, &startM);
    scanf("%d", &needM);

    if(needM >= 60) {
        startH += 1;
        needM -= 60;
    }
    
    endH = startH;
    endM = startM + needM;
    if(endM > 59)
    {
        endM -= 60;
        
        endH = startH + 1;
        if(endH > 23) {
            endH = 0;
        }
    }


    printf("%d %d", endH, endM);
    
    return 0;
}