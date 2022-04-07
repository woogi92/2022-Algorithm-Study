#include <iostream>
using namespace std;

int main()
{
    int arr[9] = {1};
    int max = arr[0];
    int count = 0;

    for(int i = 0; i < 9; i++) 
    {
        cin >> arr[i];
        if(max < arr[i]) {
            max = arr[i];
            count = i+1;
        }
    }

    cout << max << "\n" << count;
    return 0;
}