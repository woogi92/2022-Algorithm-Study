#include <iostream>
#include <string>

using namespace std;

int main()
{
    int wordCount;
    int groupWordCount = 0;
    bool isGroupWord = true;
    string word;

    cin >> wordCount;

    for(int i = 0; i < wordCount; i++)
    {
        cin >> word;
        
        isGroupWord = true;

        for(int j = 0; j < word.length(); j++)
        {
            char checkLetter = word.at(j);
            int lastIndex = j;
            
            for(int k = j+1; k < word.length(); k++)
            {
                 if(checkLetter == word.at(k))
                {
                    if(k - lastIndex > 1)
                    {
                        isGroupWord = false;
                        break;
                    }
                    lastIndex = k;
                }
            }
        } 

        if(isGroupWord)    
        {
            groupWordCount++;
        }
    }

    cout << groupWordCount;

    return 0;
}