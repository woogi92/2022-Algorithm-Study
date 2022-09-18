#include <iostream>
#include <map>

using namespace std;

int main()
{
    map<int, int> xCoordinates;
    map<int, int> yCoordinates;
    int result_x, result_y;

    for(int i = 0; i < 3; i++)
    {
        int x, y;
        cin >> x >> y;

        xCoordinates[x]++;
        yCoordinates[y]++;
    }

    for(auto iter = xCoordinates.begin(); iter != xCoordinates.end(); ++iter)
    {
        if(iter -> second == 1)
        {
            result_x = iter-> first;
        }
    }

    for(auto iter = yCoordinates.begin(); iter != yCoordinates.end(); ++iter)
    {
        if(iter -> second == 1)
        {
            result_y = iter-> first;
        }
    }

    cout << result_x << " " << result_y;
    return 0;
}