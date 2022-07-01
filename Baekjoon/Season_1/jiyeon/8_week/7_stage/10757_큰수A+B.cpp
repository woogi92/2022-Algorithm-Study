#include <iostream>
#include <string>

using namespace std;

int main()
{
    string a,b;

    // A,B 입력
    cin >> a >> b;
    
    string result = "";     // 결과
    
    int carry = 0;          // 올림값: A,B의 1의 자리수 합이 15면 1이 올림 값

   // 자리수가 더 긴 수를 a로 설정
   if (a.size() < b.size()) 
        swap(a, b);

    // 각 자리 수 더하기
    for(int i = 1; i <= a.size(); i++)
    {
        // A, B의 인덱스 값 (마지막부터 시작)
        int index_a = a.size() - i;
        int index_b = b.size() - i;

        // 위에서 구한 인덱스에 해당하는 문자 저장
        char char_a = a[index_a]; 
        char char_b = (index_b < 0 ? '0' : b[index_b]);

        // 각 자리수 덧셈
        int sum = (char_a - '0') + (char_b - '0') + carry;

        // 각 자리수를 더했을 때 올림값(10의 자리 수) 계산
        carry = sum/10;

        // 각 자리수를 더했을 때 1의 자리수 계산
        char remain = sum % 10 + '0';

        // 결과 문자열 앞에 덧셈 결과 붙여주기
        result = remain + result;
    }

    // 아직 붙여주지 않은 올림값 결과 문자열의 앞에 붙여주기
    if(carry != 0)
    {
        result = char(carry + '0') + result;
    }

    // 결과 출력
    cout << result;
    

    return 0;
}