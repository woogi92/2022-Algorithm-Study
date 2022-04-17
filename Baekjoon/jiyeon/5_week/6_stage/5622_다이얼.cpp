#include <iostream>
#include <string>

using namespace std;

int main()
{
    string input;       // 할머니가 외우시는 단어
    int dialNum = 0;    // 다이얼 번호
    int sum = 0;        // 전화거는 시간의 합

    cin >> input;

    for(int i = 0; i < input.length(); i++)
    {
        int ascii = (int)input.at(i) - 65;  // 문자의 아스키 코드
        int quotient = ascii / 3;           // 아스키코드 / 3의 몫
        int remainder = ascii % 3;          // 아스키코드 % 3의 나머지

        dialNum = quotient + 2;

        // 예외인 경우의 다이얼 번호 다시 설정
        if(quotient == 8)
        {
            dialNum--;
        }
        if(quotient == 6 && remainder == 0)
        {
            dialNum--;    
        }
        if(quotient == 7 && remainder == 0)
        {
            dialNum--;
        }

        // 다이얼 누르는 시간 계산
        sum += dialNum + 1;
    }

    cout << sum;

    return 0;
}