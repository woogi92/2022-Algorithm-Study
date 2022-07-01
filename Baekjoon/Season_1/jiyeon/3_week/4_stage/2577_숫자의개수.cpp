#include <iostream>
#include <string>
using namespace std;

int main()
{
    int count[10] = {0};

    int a, b, c;

    cin >> a >> b >> c;

    string result = to_string(a * b * c);
    
    for(int i = 0; i < result.length(); i++) 
    {
        int tmp = (int)result.at(i) - 48;
         for(int j = 0; j < 10; j++) 
         {
             if(tmp == j) {
                 count[j] += 1;
             }
         }
    }

    for(int i = 0; i < 10; i++) 
    {
        cout << count[i] << "\n";
    }
    

    return 0;
}