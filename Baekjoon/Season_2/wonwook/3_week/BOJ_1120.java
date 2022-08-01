import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_1120 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String[] str = reader.readLine().split(" ");
        /** 핵심은 문자열이 짧은 a 의 길이만큼 b에서 잘라서 해당 인덱스들이 다른걸 카운트 하면됨.
         *  그 카운트 중에서 제일 작은 수를 출력하면 됨
         *  문자열의 길이가 같을 경우에도 최소 1번은 비교해야 함
         *  따라서, 비교횟수 = b길이 - a길이 + 1
         */
        int compareCnt = str[1].length() - str[0].length() + 1;
        int min = Integer.MAX_VALUE;

        for(int i=0; i<compareCnt; i++){
            int cnt = 0;
            for(int j=0; j<str[0].length(); j++){
                if (str[0].charAt(j) != str[1].charAt(i + j)) {
                    cnt++;
                }
            }
            min = Math.min(min,cnt);
        }
        System.out.println(min);
        reader.close();
    }
}
