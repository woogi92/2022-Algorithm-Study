#include <iostream>

using namespace std;

int n, map[3][3];

int CanWin(int row, int col){
    // 맵의 끝지점
    if(row == n-1 && col == n-1) {
        return 1;
    }
    // 맵을 벗어나거나 움직일 수 없을 경우
    if(0 > row || row >= n || 0 > col || col >= n) {
        return 0;
    }

    int result = 0;
    // 아래로 이동
    if(row + map[row][col] > row) {
        result = max(result, CanWin(row + map[row][col], col));
    }
    // 우측으로 이동
    if(col + map[row][col] > col) {
        result = max(result, CanWin(row, col + map[row][col]));
    }
    return result;
}

int main()
{
    // 입력
    cin >> n;
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            cin >> map[i][j];

    // 출력
    if(CanWin(0, 0)) {
        cout << "HaruHaru";
    }
    else {
        cout << "Hing";
    }
}