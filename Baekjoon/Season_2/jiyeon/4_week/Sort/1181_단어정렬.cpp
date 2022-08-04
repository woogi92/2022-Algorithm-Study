#include <iostream>
#include <vector>

using namespace std;

// 두 문자열을 사전 순으로 정렬하는 함수
void SortWordDictionaryOrder()
{
}

void Merge(vector<string>& words, int start, int mid, int end)
{
    vector<string> sorted;
    int sortedLeftIdx = start;
    int sortedRightIdx = mid;
    int sortedIdx = start;
    
    /*while(sortedLeftIdx <= mid && sortedRightIdx <= right)
    {
    }*/

    
}

// 문자열의 길이가 짧은 것부터 합병 정렬하는 함수
void MergeSortWordsLength(vector<string>& words, int left, int right)
{
    // words를 두 개의 리스트로 분할한다.
    int mid;

    if(left < right)
    {
        mid = (left + right)/2;
        MergeSortWordsLength(words, left, mid);
        MergeSortWordsLength(words, mid+1, right);
        Merge(words, left, mid, right);
    }
}

// 중복되는 단어 제거하는 함수
void Deduplication(vector<string>& words, int size)
{
    for(int i = 0; i < size; i++)
    {
        string compareWord = words[i];
        for(int j = i+1; j < size; j++)
        {
            if(words[i] == words[j])
            {
                words.erase(words.begin() + j);
            }
        }
    }
}

int main()
{
    int n;          // 단어의 개수
    vector<string> words;
 
    // 입력
    cin >> n;
    
    for(int i = 0; i < n; i++)
    {
        string word;
        cin >> word;
        words.push_back(word);
    }

    // 중복된 단어 제거
    Deduplication(words, n);
    
    // 단어를 길이 순서대로 정렬
    MergeSortWordsLength(words, 0, n-1);
    
    // 단어를 사전 순서대로 정렬
    

    // 출력
    for(int i = 0; i < n; i++)
    {
        cout << words[i];
    }

    return 0;
}