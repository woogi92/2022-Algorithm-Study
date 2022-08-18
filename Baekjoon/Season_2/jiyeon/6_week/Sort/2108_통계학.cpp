#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

vector<int> numbers;
    
// 산술평균: N개의 수들의 합을 N으로 나눈 값
int ArithmeticMean(int n, int sum)
{
    return round((float)sum / n);
}

// 중앙값: N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
int Median()
{
    return numbers[numbers.size()/2];
}


// sort 기준 정하는 함수
bool compare(const pair<int, int> &p1, const pair<int, int> &p2)
{
    // 빈도수가 같으면 숫자가 작은게 앞으로
    if(p1.second == p2.second)
    {
        return p1.first < p2. first;
    }
    // 아니면 빈도수가 큰게 앞으로
    return p1.second > p2.second;
}

// 최빈값: N개의 수들 중 가장 많이 나타나는 값
int Mode()
{
    vector<pair<int, int>> counts;

    for(int i = 0; i < numbers.size(); i++)
    {
        if(counts.empty())
        {
            counts.push_back(pair<int,int>(numbers[i], 1));
            continue;
        }

        if(counts.back().first == numbers[i])
        {
            pair<int, int> tmp = counts.back();
            tmp.second++;
            counts.pop_back();
            counts.push_back(tmp);
        } 
        else
        {
            counts.push_back(pair<int, int>(numbers[i], 1));
        }
    }

    sort(counts.begin(), counts.end(), compare);

    if(counts[0].second == counts[1].second)
    {
        return counts[1].first;
    }
    return counts[0].first;
}

// 범위: N개의 수들 중 최대값과 최소값의 차이
int Range()
{
    return numbers.back() - numbers[0];
}


int main()
{
    int n;
    int sum = 0;
    
    // 입력
    cin >> n;
    
    for(int i = 0; i < n; i++)
    {
        int num;
        cin >> num;
        numbers.push_back(num);
        sum += num;
    }

    sort(numbers.begin(), numbers.end());

    // 출력
    cout << ArithmeticMean(n, sum) << "\n";
    cout << Median() << "\n";
    cout << Mode() << "\n";
    cout << Range();

    return 0;
}