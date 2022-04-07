#include <iostream>
#include <string>
using namespace std;

int main()
{
    int t;
    string testCase;
    int count = 0;
    int result = 0;

    cin >> t;

    for(int i = 0; i < t; i++) 
    {
        
        cin >> testCase;      

       
        for(int j = 0; j < testCase.length(); j++) 
        {
            if(testCase.at(j) == 'O') 
            {
                count +=1;
            } else {
                count = 0;
            }
            result += count;         
        }

        cout << result << "\n";
        count = 0;
        result = 0;
    }
    return 0;
}