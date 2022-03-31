#include <iostream>
using namespace std;

int main()
{
    int n;
    int arr[42] = {0};
    int count = 0;

    for(int i = 0; i < 10; i++) 
    {
        cin >> n;
        if(!arr[n%42]++) {
            count++;
        }
    }
    cout << count;

    return 0;
}
// 결국 못풀었다구 합니다.