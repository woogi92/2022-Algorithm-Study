#include <iostream>
#include <string>
#include <math.h>

using namespace std;

int main()
{
    string input;           // 입력받은 문자열
    int num[2] = {0,0};     // 상수가 읽는 숫자

    // 숫자 입력 받기
    for(int i = 0; i < 2; i++)
    {
        cin >> input;

        int digit = 2;  // 자리수
        // 입력받은 문자열을 상수가 읽는 숫자로 변경
        for(int j = input.length()-1; j >= 0; j--)
        {
            num[i] += ((int)input.at(j) - 48) * pow(10,digit);
            digit--;
        }
    }

    // 상수가 읽은 숫자 중 큰 값 출력
    if(num[0] < num[1])
    {
        cout << num[1];
    }
    else 
    {
         cout << num[0];
    }
    
    return 0;
}