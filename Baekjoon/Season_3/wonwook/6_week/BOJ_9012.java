package stack;

import java.io.*;
import java.util.Stack;
import java.util.StringTokenizer;

public class BOJ_9012 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer sToken;

        Stack<Character> sp = new Stack<>();

        int commandNum;

        commandNum = Integer.parseInt(reader.readLine());
        String[] str = new String[commandNum];

        for(int i=0; i<commandNum; i++){
            sToken = new StringTokenizer(reader.readLine());
            str[i] = sToken.nextToken();

        }

        for(int i=0; i<commandNum; i++){
            for(int j=0; j<str[i].length(); j++){
                if(str[i].charAt(j) =='('){
                    sp.push(str[i].charAt(j));
                } else{
                    if(sp.isEmpty()){
                        sp.push(str[i].charAt(j));
                    } else if(sp.peek() == '('){
                        sp.pop();
                    }
                }
            }
            if(sp.isEmpty()) writer.write("YES" + "\n");
            else writer.write("NO" + "\n");
            sp.clear();
        }

        writer.flush();
    }
}