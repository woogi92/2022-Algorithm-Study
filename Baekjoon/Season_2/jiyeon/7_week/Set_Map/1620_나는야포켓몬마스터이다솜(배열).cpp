#include <iostream>
#include <string>
#include <cstdio>
#include <map>
#include <cstdlib>

using namespace std; 

int n;                  //포켓몬의 수
int m;                  //입력받을 문제의 수 
char name[21];           //포켓몬 이름 
map<string, int> pokemonName;   //문자열 기준으로 정렬
string pokemonNum[100001];     //번호 기준으로 정렬 

void input()
{
    cin >> n;
    cin >> m;
    for(int i = 0; i < n; i++)
    {
        scanf("%s", name);
        string s = name;
        pokemonName.insert(pair<string, int>(s, i));
        pokemonNum[i] = s;
    }
}

void solution()
{
    for(int i = 0; i < m; i++)
    {
        scanf("%s", name);
        if(isdigit(name[0]))
        {
            cout << pokemonNum[atoi(name)-1] << "\n";
        }
        else
        {
            string s = name;
            printf("%d\n", pokemonName[s] + 1);
        }
    }
}

int main(void)
{
    input();
    solution();
    return 0;
}

//출처: https://blockdmask.tistory.com/198 [개발자 지망생:티스토리]