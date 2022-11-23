/*
 * 문제: 백준 1406 에디터
 * 유형: 연결 리스트
 * L - 커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
 * D - 커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
 * B - 커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
 * P - 문자를 커서 왼쪽에 추가함
 * 단, 명령어가 수행되기 전에 커서는 문장의 맨 뒤에 위치하고 있다고 한다.
 * <input>
 * 1 - 초기에 편집기에 입력되어 있는 문자열 (N <= 100,000, 영어 소문자)
 * 2 - 입력할 명령어의 개수를 나타내는 정수 M (1 <= M <= 500,000)
 * 3~ - M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어짐 (명령어는 네 가지 형태)
 * <output>
 * 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열 출력
 */

import java.util.Scanner;
import java.util.Arrays;

public class 에디터 {
  static final int size = 10; // N <= 100,000
  static char[] data = new char[size];
  static int[] pre = new int[size];
  static int[] nxt = new int[size];
  static int unused = 1;
  static int cursor = 0;

  static void insert(char c) {
    data[unused] = c;
    pre[unused] = cursor;
    nxt[unused] = nxt[cursor];
    if(nxt[cursor] != -1) pre[nxt[cursor]] = unused;
    nxt[cursor] = unused;
    unused++;
  }

  static void delete() {
    nxt[pre[cursor]] = nxt[cursor];
    if(nxt[cursor] != -1) pre[nxt[cursor]] = pre[cursor];
  }

  static void printText() {
    int cur = nxt[0];
    while(cur != -1) {
      System.out.print(data[cur]);
      cur = nxt[cur];
    }
  }
  public static void main(String[] args) {
    Arrays.fill(pre, -1);
    Arrays.fill(nxt, -1);
    String text = new Scanner(System.in).nextLine();
    int num = new Scanner(System.in).nextInt();

    // 초기에 편집기에 입력되어 있는 문자열 연결 리스트 insert
    for(int i = 0; i < text.length(); i++) {
      insert(text.charAt(i));
      cursor++;
    }

    System.out.println(Arrays.toString(data));
    System.out.println(Arrays.toString(pre));
    System.out.println(Arrays.toString(nxt));

    // 명령어 실행
    for(int i = 0; i < num; i++) {
      String instruction = new Scanner(System.in).nextLine();
      char type = instruction.charAt(0);
      switch(type) {
        case 'L':
          if(pre[cursor] != -1) cursor = pre[cursor];
          break;
        case 'R':
          if(nxt[cursor] != -1) cursor = nxt[cursor];
          break;
        case 'B':
          if(pre[cursor] != -1) {
            delete();
            cursor = pre[cursor];
            break;
          }
        case 'P':
          char c = instruction.charAt(2);
          insert(c);
          cursor = nxt[cursor];
          break;
      }
      System.out.println(cursor);
    }
    printText();
  }
}
