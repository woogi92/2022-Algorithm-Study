#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;
 
// 서브 어레이 `a[low…high]`에 삽입 어레이을 수행하는 함수
void insertionsort(int a[], int low, int high)
{
    // 서브 어레이의 두 번째 요소부터 시작
    // (인덱스 `low`의 요소는 이미 정렬되어 있음)
    for (int i = low + 1; i <= high; i++)
    {
        int value = a[i];
        int j = i;
 
        // 정렬된 하위 집합 a[0…i-1] 내에서 인덱스 `j`를 찾습니다.
        // 요소 a[i]가 속한 곳
        while (j > low && a[j - 1] > value)
        {
            a[j] = a[j - 1];
            j--;
        }
 
        // 서브 어레이 `a[j…i-1]`가
        // 한 위치만큼 오른쪽, 즉 `a[j+1…i]`
 
        a[j] = value;
    }
}
 
// Lomuto 분할 방식을 사용하여 배열을 분할하는 함수
int partition(int a[], int low, int high)
{
    // 피벗으로 배열의 가장 오른쪽 요소를 선택합니다.
    int pivot = a[high];

    int pIndex = low;
 
    // 피벗보다 작거나 같은 요소를 찾을 때마다 `pIndex`증가
    // 해당 요소는 피벗 앞에 배치
    for (int i = low; i < high; i++)
    {
        if (a[i] <= pivot)
        {
            swap(a[i], a[pIndex]);
            pIndex++;
        }
    }
 
    // `pIndex`의 요소와 배열의 가장 오른쪽 요소 교체
    swap (a[pIndex], a[high]);
 
    // `pIndex` 반환
    return pIndex;
}
 
// 피벗에 걸쳐 요소를 재배열하기 위해 무작위 파티션 퀵 정렬
int randPartition(int a[], int low, int high)
{
    // `[low, high]` 사이의 무작위 인덱스 선택
    int pivotIndex = rand() % (high - low + 1) + low;
 
    // 끝 요소를 무작위 인덱스에 있는 요소와 swap
    swap(a[pivotIndex], a[high]);
 
    // 파티션 프로시저 호출
    return partition(a, low, high);
}
 
// 주어진 범위의 요소에 대해 Heapsort을 수행하는 함수
void heapsort(int *begin, int *end)
{
    make_heap(begin, end);
    sort_heap(begin, end);
}
 
// 주어진 어레이에 대해 introsort를 수행하는 함수
void introsort(int a[], int *begin, int *end, int maxdepth)
{
    // 파티션 크기가 16 미만인 경우 삽입 정렬 수행
    if ((end - begin) < 16) {
        insertionsort(a, begin - a, end - a);
    }
    // 최대 깊이가 0이면 Heapsort 수행
    else if (maxdepth == 0) {
        heapsort(begin, end + 1);
    }
    // 그렇지 않으면 퀵 정렬 수행
    else {
        int pivot = randPartition(a, begin - a, end - a);
        introsort(a, begin, a + pivot - 1, maxdepth - 1);
        introsort(a, a + pivot + 1, end, maxdepth - 1);
    }
}
 
int main()
{
    // 예시 데이터
    int a[] = { 5, 7, -8, 9, 10, 4, -7, 0, -12, 1, 6, 2, 3, -4, -15, 12 };
    int n = sizeof(a) / sizeof(a[0]);
 
    // 재귀 호출 최대 깊이 
    int maxdepth = log(n) * 2;
 
    // introsort 알고리즘 수행
    introsort(a, a, a + n - 1, maxdepth);
 
    // 정렬된 배열 출력
    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }
 
    return 0;
}
