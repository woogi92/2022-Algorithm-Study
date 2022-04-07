#include <iostream>
using namespace std;

int main()
{
    int n;
    int remains[10] = {-1};
    int count = 10;

    // 입력
    for(int i = 0; i < 10; i++) 
    {
        cin >> n;
        remains[i] = n % 42;
    }

    // 중복 숫자 검사
    for(int i = 0; i < 10; i++) 
    {
        int check = remains[i];
        for(int j = i+1; j < 10; j++)
        {
            if(check == remains[j])
            {
                remains[j] = -1;
            }
        }
    }



    // 출력
    for(int i = 0; i < 10; i++)
    {
        if(remains[i] == -1) {
            count--;
        }
    }

    cout << count;
    

    return 0;
}

// 결국 백준에서 틀렸다고 뜨는데 반례를 못찾겠습니다ㅠ
// 다른 사람이 푼 코드 (아래)
/*
for(int i = 0; i < 10; i++){
        cin>>num;
        if(!remainderArr[num % 42]++)
            sum++;
    }
*/