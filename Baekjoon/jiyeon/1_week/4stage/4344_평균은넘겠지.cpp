#include <iostream>
#include <cmath>

using namespace std;
int main()
{
    int c, n;
    int score[1000] = {0};
    int sum;
    float average;

    cin >> c;
    
    for(int i = 0; i < c; i++)
    {
        cin >> n;
        average = 0;
        for(int j = 0; j < n; j++) 
        {
            cin >> score[j];
            average += score[j];
        }
        cout << fixed;
        cout.precision(3);
        cout << round(average/n) << "%\n";
    }


    return 0;
}