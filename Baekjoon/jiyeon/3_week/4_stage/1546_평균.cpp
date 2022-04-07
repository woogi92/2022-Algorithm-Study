#include <iostream>
using namespace std;

int main()
{
    int n;
    int grades[1000] = {0};
    int m = grades[0];
    int sum = 0;
    double result;

    cin >> n;

    for(int i = 0; i < n; i++) 
    {
        cin >> grades[i];
        if(m < grades[i]) {
            m = grades[i];
        }
        sum += grades[i];
    }

    result = ((double)sum / m * 100) / n;

    cout << fixed;
    cout.precision(6);
    cout << result;

    return 0;
}