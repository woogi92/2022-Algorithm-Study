package stack;

import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;

public class BOJ_10773{
    public static void main(String []args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

        Stack<Integer> st = new Stack<Integer>();
        StringTokenizer sToken;

        int k, sum;
        sum = 0 ;

        sToken = new StringTokenizer(reader.readLine());
        k = Integer.parseInt(sToken.nextToken());

        for(int i=0; i<k; i++){
            sToken = new StringTokenizer(reader.readLine());
            int tempNum = Integer.parseInt(sToken.nextToken());

            if(tempNum == 0){
                st.pop();
            } else {
                st.push(tempNum);
            }
        }

        for(Integer i : st) {
            sum += i;
        }
        writer.write(Integer.toString(sum) + '\n');
        writer.flush();
    }
}