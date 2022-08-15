package sorting;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;

public class BOJ_2075 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

        int num;
        String[] strNum;
        ArrayList<Integer> arr = new ArrayList<>();

        num = Integer.parseInt(reader.readLine());

        for(int i=0; i<num; i++){
            strNum = reader.readLine().split(" ");
            for(int j=0; j<num; j++){
                arr.add(Integer.parseInt(strNum[j]));
            }
        }
        arr.sort(Collections.reverseOrder());

        writer.write(Integer.toString(arr.get(num-1)));
        writer.flush();
    }
}
