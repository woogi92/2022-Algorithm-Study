#include <iostream>
using namespace std;

int main ()
{
    int n;    

    cin >> n;

    int arr[n+1];
    int min = 1000000;
    int max = -1000000;
    
    for(int i = 0; i < n; i++)
    {
        cin >> arr[i];
    
        if(max < arr[i]) {
            max = arr[i];
        } 
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    
    cout << min << " " << max << "\n";

    return 0;
}

