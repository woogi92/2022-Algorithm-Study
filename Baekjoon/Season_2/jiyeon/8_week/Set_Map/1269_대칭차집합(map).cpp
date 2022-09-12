#include <iostream>
#include <map>

using namespace std;

int main()
{
    int aSize, bSize;
    cin >> aSize >> bSize;

    map<int, bool> m;

    for(int i = 0; i < aSize + bSize; i++)
    {
        int num;
        cin >> num;

        if(m[num] == true)
        {
            m.erase(num);
        }
        else
        {
            m[num] = true;
        }
    }

    cout << m.size();
    return 0;
}