#include <iostream>
#include <set>

using namespace std;

// s1-s2의 원소 개수를 구하는 함수
int GetDifferenceCount(set<int> &s1, set<int> &s2)
{
    int count = 0;
    for(auto iter = s1.begin(); iter != s1.end(); iter++)
    {
        if(s2.find(*iter) == s2.end())
        {
            count++;
        }
    }
    return count;
}

// 집합 s의 원소를 입력 받는 함수
void InsertNum(set<int> &s, int size)
{
    for(int i = 0; i < size; i++)
    {
        int num;
        cin >> num;
        s.insert(num);
    }
}

int main()
{
    int aSize, bSize;           // 집합 A, B의 크기
    cin >> aSize >> bSize;

    set<int> a;     // 집합 A
    set<int> b;     // 집합 B

    // 집합 A, B의 원소 입력 받기
    InsertNum(a, aSize);
    InsertNum(b, bSize);

    // 출력: A-B의 원소 개수 + B-A의 원소 개수
    cout << GetDifferenceCount(a, b) + GetDifferenceCount(b, a);
    return 0;
}