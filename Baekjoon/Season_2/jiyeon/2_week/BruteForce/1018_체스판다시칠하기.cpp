#include <iostream>
#include <cstdlib>

using namespace std;

string BW[8] = {
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
};
string WB[8] = {
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"
};
char box[51][51];

int GetWBCount(int col, int row)
{
    int count = 0;
    for(int i = 0; i < 8; i++)
    {
        for(int j = 0; j < 8; j++)
        {
            if(box[col+i][row+j] != WB[i].at(j))
            {
                count++;
            }
        }
    }
    return count;
}

int GetBWCount(int col, int row)
{
    int count = 0;
    for(int i = 0; i < 8; i++)
    {
        for(int j = 0; j < 8; j++)
        {
            if(box[col+i][row+j] != BW[i].at(j))
            {
                count++;
            }
        }
    }
    return count;
}

int main()
{
    int n, m;
    cin >> n >> m;

    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j < m; j++)
        {
            cin >> box[i][j];
        }
    }
    
    int minChangeCount = 64;

    for(int i = 0; i + 8 <= n; i++)
    {
        for(int j = 0; j + 8 <= m; j++)
        {
            int tmpWBCount = GetWBCount(i,j);
            int tmpBWCount = GetBWCount(i,j);
            int checkCount;
            if(tmpWBCount < tmpBWCount)
            {
                checkCount = tmpWBCount;
            } 
            else 
            {
                checkCount = tmpBWCount;
            }
            if(minChangeCount > checkCount)
            {
                minChangeCount = checkCount;
            }
        }
    }
    
    cout << minChangeCount;
    return 0;
}