#include <iostream>

using namespace std;

// 손익분기점을 얻는 함수
int GetBreakEvenPoint(int fixedCost, int variableCost, int price)
{
    int count;                          // 노트북 판매 수

    if(price - variableCost <= 0)
    {
        count = fixedCost - 1;
    }

    // 손익분기점 = A / (C-B)  +1
    else 
    {
        count =  fixedCost / (price - variableCost) + 1;
    }

    return count;
}

int main()
{
    int fixedCost;       // 고정비용
    int variableCost;    // 가변비용
    int price;           // 노트북 한 대 가격

    cin >> fixedCost >> variableCost >> price;

    cout << GetBreakEvenPoint(fixedCost, variableCost, price);

    return 0;
}