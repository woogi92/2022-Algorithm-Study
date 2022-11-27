import java.io.*;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class 에디터2 {
  public static void main(String[] args) throws IOException {
    // 초기 문자열 입력 & LinkedList 생성
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // BufferedReader 선언
    LinkedList<Character> list = new LinkedList<Character>(); // Character형 LinkedList 생성
    String text = br.readLine(); // 초기 문자열 입력
    int cursor; // 커서 위치
    for(cursor = 0 ; cursor < text.length(); cursor++) {
      list.add(text.charAt(cursor));
    }

    // 명령어 실행
    int num = Integer.parseInt(br.readLine());
    StringTokenizer st; // StringTokenizer 선언
    char in, ch; // 명령어, 문자
    for(int i = 0; i < num; i++) {
      st = new StringTokenizer(br.readLine());
      in = st.nextToken().charAt(0);
      switch(in) {
        case 'L':
          if(cursor != 0) cursor--;
          break;
        case 'D':
          if(cursor != list.size()) cursor++;
          break;
        case 'B':
          if(cursor != 0) {
            cursor--;
            list.remove(cursor);
          }
          break;
        case 'P':
          ch = st.nextToken().charAt(0);
          list.add(cursor, ch);
          cursor++;
          break;
      }
    }
    // 출력
    for(int i = 0; i < list.size(); i++) {
      System.out.print(list.get(i));
    }
  }
}
