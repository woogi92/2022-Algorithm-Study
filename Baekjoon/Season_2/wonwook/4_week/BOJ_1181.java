package sorting;

import java.io.*;
import java.util.Arrays;

class Words implements Comparable<Words>{
    private String str;
    private int len;

    public int getLen() {
        return len;
    }

    public String getStr() {
        return str;
    }

    public void setStr(String str) {
        this.str = str;
    }

    public void setLen(int len) {
        this.len = len;
    }

    @Override
    public int compareTo(Words o) {
        return (this.str.compareTo(o.getStr()));
    }
}
public class BOJ_1181 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(reader.readLine());
        Words[] words = new Words[n];
        for(int i=0; i<n; i++){
            String str = reader.readLine();
            words[i] = new Words();
            words[i].setStr(str);
            words[i].setLen(str.length());
        }
        Arrays.sort(words, (o1, o2) -> {
            if (o1.getLen() == o2.getLen()) {
                return o1.getStr().compareTo(o2.getStr());
            } else{
                return o1.getLen() - o2.getLen();
            }
        });


        for(int i=0; i<n; i++){
            if (!words[i].getStr().equals(words[i + 1].getStr())) {
                System.out.println(words[i].getStr());
            }
        }
    }
}
