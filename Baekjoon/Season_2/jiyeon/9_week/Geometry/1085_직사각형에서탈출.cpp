#include <iostream>

using namespace std;

int main()
{
    int x, y, w, h;

    cin >> x >> y >> w >> h;

    int distance[4]= {x, y, w-x, h-y};
    int min = distance[0];
    for(int i = 0; i < 4; i++)
    {
        if(distance[i] < min)
        {
            min = distance[i];
        }
    }

    cout << min;

    return 0;
}