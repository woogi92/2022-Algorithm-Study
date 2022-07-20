import java.io.*;
import java.util.Arrays;

public class algorithmStudy {
    //  10989
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = "";

        //입력갯수
        str = br.readLine();
        int size = Integer.parseInt(str);

        //동적배열선언. 원래는 ArrayList를 사용했으나, 메모리초과로 인해 배열로 변경
        int[] arr = new int[size];
        for(int i=0; i<size; i++){
            str = br.readLine();
            arr[i] = Integer.parseInt(str);
        }
        //정렬
        Arrays.sort(arr);

        //출력
        for(int i : arr){
            bw.write(Integer.toString(i) + "\n");
        }

        //버퍼 닫기
        bw.flush();
    }
}
