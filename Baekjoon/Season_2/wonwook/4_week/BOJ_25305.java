package sorting;

import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;

public class BOJ_25305 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

        int n;   // 응시자 수
        int k;   // 상 받는 사람의 수
        ArrayList<Integer> score = new ArrayList<>();    // 점수

        String[] str = reader.readLine().split(" ");    // in : 응시자 수, 상 받는 사람 수

        n = Integer.parseInt(str[0]);   // 응시자 수
        k = Integer.parseInt(str[1]);   // 상 받는 사람의 수

        str = reader.readLine().split(" "); // in : 점수

        for(int i=0; i<n; i++){
            score.add(Integer.parseInt(str[i]));
        }
        score.sort(Comparator.reverseOrder());

        writer.write(score.get(k-1) + "\n");
        writer.flush();
    }
}
