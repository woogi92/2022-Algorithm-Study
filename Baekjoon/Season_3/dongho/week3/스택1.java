import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 스택1 {
  static final int MX = 10_005;
  static int[] stack = new int[MX];
  static int top = 0;
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    int commandNum = Integer.parseInt(br.readLine());
    
    StringTokenizer st; // StringTokenizer 선언
    for(int i = 0; i < commandNum; i++) {
      st = new StringTokenizer(br.readLine());
      String command = st.nextToken();
      switch(command) {
        case "push":
          int X = Integer.parseInt(st.nextToken());
          push(X);
          break;
        case "pop":
          pop();
          break;
        case "size":
          size();
          break;
        case "empty":
          empty();
          break;
        case "top":
          top();
          break;
      }
    }
  }
  static void push(int x) {
    stack[top++] = x;
  }
  static void pop() {
    if(is_empty()) {
      System.out.println(-1);
      return;
    }
    System.out.println(stack[--top]);
  }
  static void size() {
    System.out.println(top);
  }
  static void empty() {
    if(is_empty()) {
      System.out.println(1);
    } else {
      System.out.println(0);
    }
  }
  static void top() {
    if(is_empty()) {
      System.out.println(-1);
      return;
    }
    System.out.println(stack[top-1]);
  }
  static boolean is_empty() {
    return top == 0;
  }
}
