import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class baekjoon_18528 {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    Deque<Integer> q = new LinkedList<Integer>();

    int N = Integer.parseInt(br.readLine());

    StringTokenizer command;

    while (N-- > 0) {
      command = new StringTokenizer(br.readLine(), " "); // 문자열 분리

      switch (command.nextToken()) {
        case "push" -> {
          q.offer(Integer.parseInt(command.nextToken()));
        }
        case "pop" -> {
          Integer item = q.poll();
          if (item == null) {
            sb.append(-1).append('\n');
          } else {
            sb.append(item).append('\n');
          }
        }
        case "size" -> {
          sb.append(q.size()).append('\n');
        }
        case "empty" -> {
          if (q.isEmpty()) {
            sb.append(1).append('\n');
          } else {
            sb.append(0).append('\n');
          }
        }
        case "front" -> {
          Integer item = q.peek();
          if (item == null) {
            sb.append(-1).append('\n');
          } else {
            sb.append(item).append('\n');
          }
        }
        case "back" -> {
          Integer item = q.peekLast();
          if (item == null) {
            sb.append(-1).append('\n');
          } else {
            sb.append(item).append('\n');
          }
        }
      }
    }
    System.out.println(sb);
  }
}
