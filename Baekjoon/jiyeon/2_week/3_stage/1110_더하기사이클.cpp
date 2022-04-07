#include <iostream>

using namespace std;

int main()
{
    int n, sum, newN;
    int count = 0;

    cin >> n;
    newN = n;
    
    while(true)
    {
        sum = (newN / 10) + (newN % 10);  

        newN = (newN % 10) * 10 + sum % 10; 

        count++;
     
        if(newN == n){
            break;
        }
    } 
          
    cout << count;

    return 0;
}