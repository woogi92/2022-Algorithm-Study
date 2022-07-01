#include <iostream>
#include <string>
#include <cstring>

using namespace std;

int main()
{
    string s;   
    string alpha = "abcdefghijklmnopqrstuvwxyz";
    int usedAlphabet[26];
    fill_n(usedAlphabet, 26, 0);

    cin >> s;
    
    // 빈도수 체크
    for(int i = 0; i < s.length(); i++)
    {
        for(int j = 0; j < alpha.length(); j++)
        {
            if(strcasecmp(s.substr(i, 1).c_str(), alpha.substr(j, 1).c_str()) == 0)
            {
                usedAlphabet[j] += 1;
            }
        }        
    }

    int max = usedAlphabet[0];
    char maxUsedAlphabet = (char)65;
    int count = 0;

    // 가장 많이 사용된 알파벳 구하기
    for(int i = 0; i < 26; i++)
    {
        if(max < usedAlphabet[i])
        {
            max = usedAlphabet[i];
            maxUsedAlphabet = (char)(i+65);
            count = 0;
        } 
        // 가장 많이 사용된 알파벳이 여러개인지 체크
        if(max == usedAlphabet[i])
        {
            count++;
        }
    }

    // 출력
    if(count > 1)
    {
        cout << "?";
    }
    else
    {
        cout << maxUsedAlphabet;
    }


    return 0;
}