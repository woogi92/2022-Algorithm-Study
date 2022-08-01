import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_2303 {
    public static final int FIVE = 5;
    public static final int THREE = 3;
    public static int[] score;
    public static int max = Integer.MIN_VALUE;

    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        /**
         * 1.이차원배열
         * 2. dfs를 이용하여 최대값 구하기
         * 3. card : 5장
         * 4. number : 1 ~ 10
         * 5. person : n
         * */

        int n = Integer.parseInt(reader.readLine());

        int[][] arr = new int[n][FIVE];
        int[] tmpArr = new int[THREE];
        int[] score = new int[n];
        int idx = -1;

        /** set arr */
        for(int i=0; i<n; i++){
            String s = reader.readLine();
            String[] st = s.split(" ");
            for(int j=0;j <FIVE; j++){
                arr[i][j] = Integer.parseInt(st[j]);
            }
        }

        /** process dfs */
        for(int i=0; i<n; i++){
            /** 실제갯수, 비교or대입 위치, n번째 위치, n번째 배열, 비교를 위한 임시 배열 */
            dfs(0,0, i, arr[i], tmpArr);
            max = Integer.MIN_VALUE;
        }

        for(int i=0; i<n; i++){
            if (max <= score[i]) {
                max = score[i];
                idx = i;
            }
        }
        System.out.println(idx+1);
   }
    public static void dfs(int cnt, int start, int idx, int[] arr, int[] tmpArr){
        if(cnt == THREE){
            int num = 0;
            for(int i=0; i<THREE; i++){
                num += tmpArr[i];
            }
            num = num%10;
            if(max < num) {
                max = num;
                score[idx] = max;
            }
            return ;
        }
        for(int j=start; j<FIVE; j++){
            tmpArr[cnt] = arr[j];
            dfs(cnt+1, j+1, idx, arr, tmpArr);
        }
    }
}
