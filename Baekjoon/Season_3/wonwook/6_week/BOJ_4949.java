package stack;

import java.io.*;
import java.util.Stack;

public class BOJ_4949 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

        Stack<Character> sp = new Stack<>();
        String str;
        while(true){
            str = reader.readLine();

            if(str.equals(".")){
                break;
            }

            for(int i=0; i<str.length(); i++) {
                if (str.charAt(i) == '(' || str.charAt(i) == '[') {
                    sp.push(str.charAt(i));
                } else if (str.charAt(i) == ')') {
                    if(!sp.isEmpty() && sp.peek() == '('){
                        sp.pop();
                    } else sp.push(str.charAt(i));
                } else if (str.charAt(i) == ']') {
                    if(!sp.isEmpty() && sp.peek() == '['){
                        sp.pop();
                    } else sp.push(str.charAt(i));
                }
            }

            if(sp.isEmpty()) writer.write("yes"+"\n");
            else writer.write("no" + "\n");
            sp.clear();
        }
        writer.flush();
    }
}