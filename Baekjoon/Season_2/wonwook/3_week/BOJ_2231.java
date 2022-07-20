import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_2231 {
    public static void main(String[] args) throws IOException{
        /**
         * n의 분해합 = n + n(1) + n(10) + ...
         * if(m의 분해합 == n) then n의 생성자 = m
         * ex. 256의 생성자 : 245
         * 216의 생성자 : 198
         * find min m
         */
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(reader.readLine());
        //getFindMin
        for(int i=1; i<num; i++){
            // 분해합 구하기 => 재귀 사용할 것
            int tmp = getFindSum(i);

            // 1부터 찾은 분해합의 수와 num이 같은지 비교
            if(tmp == num){
                System.out.println(i);
                return;
            }
        }
        System.out.println(0);
        return ;
    }
    public static int getFindSum(int n){
        int sum = 0;
        int pos = Integer.toString(n).length();

        sum += n;

        for(int i=pos; i>0; i--){
            int q = n / (int)Math.pow((double) 10, (double) (i-1));
            sum += q;
            n = n % (int)Math.pow((double) 10, (double) (i-1));
        }
        return sum;
    }
}
