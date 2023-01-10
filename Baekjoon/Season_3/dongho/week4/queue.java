public class queue {

  static final int MX = 1_000_005;
  static int dat[] = new int[MX];
  static int head = 0, tail = 0;

  public static void main(String[] args) {
    push(10);
    push(20);
    push(30);
    System.out.println(front());
    System.out.println(back());
    pop();
    pop();
    push(15);
    push(25);
    System.out.println(front());
    System.out.println(back());
  }

  static void push(int x) {
    dat[tail++] = x;
  }

  static void pop() {
    head++;
  }

  static int front() {
    return dat[head];
  }

  static int back() {
    return dat[tail - 1];
  }
}
