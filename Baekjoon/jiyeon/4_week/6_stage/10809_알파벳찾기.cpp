#include <iostream>
#include <string>

using namespace std;

int main()
{
    string s;                   // 단어
    int alphabet[26];           // 알파벳이 처음 나온 위치
    
    // 배열 초기화
    fill_n(alphabet, 26, -1);  

    cin >> s;

    // 어떤 알파벳이 나왔는지 비교 후 처음 나온 위치 저장
    for(int i = 0; i < s.length(); i++)
    {
        for(int ascii = 97; ascii <= 122; ascii++)
        {
            if(s.at(i) == (char)ascii)
            {
                if(alphabet[ascii-97] == -1)
                    alphabet[ascii-97] = i;
            }
        }
    }

    // 출력
    for(int i = 0; i < 26; i++)
    {
        cout << alphabet[i] << " ";
    }
    return 0;
}

// 다른 사람이 푼 코드 (이중 포문을 쓰지 않아도 된다)
/*
for(int i = 0; i < s.length(); i++)
{
    if(alphabet[(int)s[i]-97] < 0)
        alphabet[(int)s[i]-97] = i;
}
*/
