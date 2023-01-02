import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.Stack;

public class 스택2 {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    Stack<Integer> stack = new Stack<>();
    int commandNum = Integer.parseInt(br.readLine());
    
    StringTokenizer st; // StringTokenizer 선언
    for(int i = 0; i < commandNum; i++) {
      st = new StringTokenizer(br.readLine());
      String command = st.nextToken();
      switch(command) {
        case "push":
          int X = Integer.parseInt(st.nextToken());
          stack.push(X);
          break;
        case "pop":
          if(stack.empty()) {
            System.out.println(-1);
          } else {
            System.out.println(stack.pop());
          }
          break;
        case "size":
          System.out.println(stack.size());
          break;
        case "empty":
          if(stack.empty()) {
            System.out.println(1);
          } else {
            System.out.println(0);
          }
          break;
        case "top":
          if(stack.empty()) {
            System.out.println(-1);
          } else {
            System.out.println(stack.peek());
          }
          break;
      }
    }
  }
}
