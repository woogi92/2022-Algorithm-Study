import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;

public class baekjoon_2164 {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    Deque<Integer> q = new LinkedList<Integer>();

    int N = Integer.parseInt(br.readLine());

    // 카드 삽입
    for (int i = 1; i <= N; i++) {
      q.offer(i);
    }

    int count = 0;
    while (q.size() != 1) {
      if (count % 2 == 0) {
        q.poll();
      } else {
        q.offer(q.poll());
      }
      count++;
    }

    System.out.print(q.peek());
  }
}
