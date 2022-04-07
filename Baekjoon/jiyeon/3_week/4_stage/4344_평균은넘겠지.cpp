#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int c, n;
    int score[1000] = {0};
    float average = 0;
    int count = 0;

    cin >> c;
    
    for(int i = 0; i < c; i++)
    {
        cin >> n;

        for(int j = 0; j < n; j++) 
        {
            cin >> score[j];
            average += (float)score[j];
        }

        average /= (float)n;

        for(int j = 0; j < n; j++)
        {
            if(average < score[j]) {
                count++;
            }
        }
        
        cout << fixed;
        cout.precision(3);
        float rate = (float)count/n * 100;
        cout << round(rate  * 1000) / 1000 << "%\n";
        

       average = 0;
       count = 0;
    }


    return 0;
}