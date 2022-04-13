#include <iostream>
#include <string>

using namespace std;


int main()
{
    string input;
    int wordCount = 0;

    getline(cin, input);

    if(input.empty())
    {
        cout << wordCount;
        return 0;
    }

    wordCount = 1;

    for(int i = 0; i < input.length(); i++)
    {
        if(input.at(i) == ' ')
        {
            wordCount++;
        }
    }

    if(input[0] == ' ')
    {
        wordCount--;
    }
    if(input[input.length()-1] == ' ')
    {
        wordCount--;
    }

    cout << wordCount;
    return 0;
}