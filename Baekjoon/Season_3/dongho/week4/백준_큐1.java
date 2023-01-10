import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class 백준_큐1 {

  static int MAX_SIZE = 10_005;
  static int[] queue = new int[MAX_SIZE];
  static int front = 0;
  static int rear = 0;

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
          push(X);
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

  static void push(int X) {
    queue[rear++] = X;
  }

  static int pop() {
    if (is_empty()) {
      return -1;
    }
    return queue[front++];
  }

  static int size() {
    return rear - front;
  }

  static int empty() {
    if (is_empty()) {
      return 1;
    }
    return 0;
  }

  static int front() {
    if (is_empty()) {
      return -1;
    }
    return queue[front];
  }

  static int back() {
    if (is_empty()) {
      return -1;
    }
    return queue[rear - 1];
  }

  static boolean is_empty() {
    return front == rear;
  }
}
