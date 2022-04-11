#include <iostream> 
using namespace std;

// 한수인지 확인하는 함수
bool CheckHansoo(int n)
{
    if(n < 100) 
    {
        return true;
    }
    else {
        bool isHansoo;
        
        // 각 자리 수 구하기
        
        int a1 = n / 100;
        int a2 = n % 100 / 10;
        int a3 = n % 10;

        // 한수 조건 만족 여부 검사
        if (a3 - a2 == a2 - a1)
        {
            isHansoo = true;
        }
        else
        {
            isHansoo=  false;
        }
        
        return isHansoo;
    }
}   


int main()
{
    int n;              // 한수 찾을 범위
    int result = 0;     // 한수 개수

    cin >> n;
    
    //한수 개수 찾기
    for(int i = 1; i <= n; i++)
    {
        if(CheckHansoo(i))
        {
            result++;
        }
    }
    
    cout << result;

    return 0;
}