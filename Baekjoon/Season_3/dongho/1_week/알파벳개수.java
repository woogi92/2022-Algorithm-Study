import java.util.Scanner;
import java.util.Arrays;

public class 알파벳개수 {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String s = in.nextLine();
    int[] countArray = new int[26]; // 원소가 나온 개수를 저장할 배열
    Arrays.fill(countArray, 0); // 배열의 원소들을 0으로 초기화
    
    // 원소 체크
    for(int i = 0; i < s.length(); i++) {
      int idx = s.charAt(i) - 'a';
      countArray[idx] += 1;
    }

    System.out.println(Arrays.toString(countArray));
  } 
}
