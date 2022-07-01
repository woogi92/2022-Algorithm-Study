#include <iostream>
#include <string>

using namespace std;


int main()
{
    string input;           // 입력받을 문자열
    int wordCount = 0;      // 단어 개수

    getline(cin, input);    // 입력

    // 입력받은 문자열이 공백일 경우, 0개만 출력
    if(input.empty())
    {
        cout << wordCount;
        return 0;
    }

    wordCount = 1;

    // 입력받은 문자열에 공백이 있으면 wordCount 증가
    for(int i = 0; i < input.length(); i++)
    {
        if(input.at(i) == ' ')
        {
            wordCount++;
        }
    }

    // 입력받은 문자열의 처음과 끝에 공백이 있을 경우 wordCount 감소
    if(input[0] == ' ')
    {
        wordCount--;
    }
    if(input[input.length()-1] == ' ')
    {
        wordCount--;
    }

    // 결과 출력
    cout << wordCount;
    return 0;
}