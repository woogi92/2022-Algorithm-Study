#include <iostream>
#include <map>
#include <string>
#include <cctype>

using namespace std;

int main()
{
      // 입출력 시간 단축
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    int n;  // 도감에 수록된 포켓몬 수
    int m;  // 맞춰야하는 문제 수
    cin >> n >> m;

    map<string, int> pokemonName;
    map<int, string> pokemonNum;
    for(int i = 1; i <= n; i++)
    {
        string name;
        cin >> name;
        
        pokemonName[name] = i;
        pokemonNum[i] = name;
    }

    for(int i = 0; i < m; i++)
    {
        string question;
        cin >> question;

        // 포켓몬 번호로 질문한 경우
        if(isdigit(question[0]))
        {
            cout << pokemonNum[stoi(question)] << "\n";
        }
        else
        {
            cout << pokemonName[question] << "\n";
        }
    }


    return 0;
}