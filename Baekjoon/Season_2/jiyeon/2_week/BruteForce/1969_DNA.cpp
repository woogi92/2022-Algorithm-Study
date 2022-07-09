#include <iostream>

using namespace std;

int main()
{
    int n, m;               // DNA 개수 N, DNA 1개의 길이 M
    char dna[1001][51];     // 입력받은 DNA

    //DNA 입력받기
    cin >> n >> m;

    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j < m; j++)
        {
            cin >> dna[i][j];
        }
    }

    string result = "";                         // 결과 DNA
    int resultIdx = 0;                          // 결과 DNA의 Idx
    int hammingDistanceSum = 0;                 // HammingDistance 합계
    string nucleod[4] = {"T", "G", "C", "A"};   // 뉴클레오티드 문자

    // 특정 자리에서의 최다빈도 뉴클레오티드 문자 구하기
    for(int charIdx = 0; charIdx < m; charIdx++)
    {
        int nucleodCount[4] = {0, 0, 0, 0};
        for(int dnaIdx = 0; dnaIdx < n; dnaIdx++)
        {
            char nucleod = dna[dnaIdx][charIdx];
            switch(nucleod)
            {
                case 'T': nucleodCount[0]++; break;
                case 'G': nucleodCount[1]++; break;
                case 'C': nucleodCount[2]++; break;
                case 'A': nucleodCount[3]++; break;
            }
        }

        int maxCount = nucleodCount[0];
        result += nucleod[0];

        for(int nucleodIdx = 0; nucleodIdx < 4; nucleodIdx++)
        {
            if(maxCount <= nucleodCount[nucleodIdx])
            {
                maxCount = nucleodCount[nucleodIdx];
                result.replace(resultIdx, 1, nucleod[nucleodIdx]);
            }
        }
        resultIdx++;
    }

    // Hamming Distance구하기
    for(int dnaIdx = 0; dnaIdx < n; dnaIdx++)
    {
        int hammingDistance = 0;
        for(int charIdx = 0; charIdx < m; charIdx++)
        {
            if(dna[dnaIdx][charIdx] != result.at(charIdx))
            {
                hammingDistance++;
            }
        }
        hammingDistanceSum += hammingDistance;
    }

    // 결과 출력
    cout << result << "\n" << hammingDistanceSum;

    return 0;
}