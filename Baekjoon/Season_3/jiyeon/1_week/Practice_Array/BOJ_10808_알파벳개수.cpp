#include <iostream>

using namespace std;

int main()
{
    int alphabetCnt[26];
    // 배열 초기화
    for(int i = 0; i < 26; i++)
    {
        alphabetCnt[i] = 0;
    }

    // 입력
    string word;
    cin >> word;

    // 알파벳 등장 횟수 구하기
    for(int i = 0; i < word.size(); i++)
    {
        int alphabet = (int)word.at(i)-'a';
        alphabetCnt[alphabet]++;
    }

    // 출력
    for(int i = 0; i < 26; i++)
    {
        cout << alphabetCnt[i] << " ";
    }

    return 0;
}