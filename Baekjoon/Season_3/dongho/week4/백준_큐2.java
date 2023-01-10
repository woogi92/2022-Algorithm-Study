import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class 백준_큐2 {

  static Deque<Integer> queue = new LinkedList<>();

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    StringTokenizer st;

    int commandNum = Integer.parseInt(br.readLine());
    for (int i = 0; i < commandNum; i++) {
      st = new StringTokenizer(br.readLine());
      String command = st.nextToken();

      switch (command) {
        case "push" -> {
          int X = Integer.parseInt(st.nextToken());
          queue.add(X);
        }
        case "pop" -> {
          bw.write(String.valueOf(pop()) + "\n");
        }
        case "size" -> {
          bw.write(String.valueOf(size()) + "\n");
        }
        case "empty" -> {
          bw.write(String.valueOf(empty()) + "\n");
        }
        case "front" -> {
          bw.write(String.valueOf(front()) + "\n");
        }
        case "back" -> {
          bw.write(String.valueOf(back()) + "\n");
        }
      }
      bw.flush();
    }
  }

  static int pop() {
    if (queue.isEmpty()) {
      return -1;
    }
    return queue.remove();
  }

  static int size() {
    return queue.size();
  }

  static int empty() {
    return queue.isEmpty() ? 1 : 0;
  }

  static int front() {
    if (queue.isEmpty()) {
      return -1;
    }
    return queue.peek();
  }

  static int back() {
    if (queue.isEmpty()) {
      return -1;
    }
    return queue.peekLast();
  }
}
