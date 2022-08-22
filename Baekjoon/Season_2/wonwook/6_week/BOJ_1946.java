package sorting;

import java.io.*;
import java.util.StringTokenizer;

public class BOJ_1946 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer sToken;

        int tc; // 테스트케이스
        int memberCnt;  //지원자 수
        int[] rank; //인덱스 : 서류순위, 값 : 면접순위

        sToken = new StringTokenizer(reader.readLine());
        tc = Integer.parseInt(sToken.nextToken());
        for(int i=1; i<=tc; i++){
            sToken = new StringTokenizer(reader.readLine());
            memberCnt = Integer.parseInt(sToken.nextToken());
            rank = new int[memberCnt+1];
            for(int j=1; j<=memberCnt; j++){
                sToken = new StringTokenizer(reader.readLine());
                int doc = Integer.parseInt(sToken.nextToken());
                int iv = Integer.parseInt(sToken.nextToken());
                rank[doc] = iv;
            }

            int cnt = 1;    // 합격자 카운트
            int min = rank[1]; // 면접 순위도 낮으면 합격
            for(int j=2; j<rank.length; j++){
                if(min > rank[j]){  // 인덱스를 통해 서류 순위는 오름차순으로 정렬. 면접 순위만 비교하여 순위가 낮을경우(숫자가 클 경우) 불합격
                    cnt++;
                    min = rank[j];
                }
            }
            writer.write(Integer.toString(cnt)+ "\n");
        }
        writer.flush();
    }
}
