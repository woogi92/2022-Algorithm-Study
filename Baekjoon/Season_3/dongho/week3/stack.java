public class stack {
  static final int MX = 1000005;
  static int[] dat = new int[MX];
  static int pos = 0;
  public static void main(String[] args) {
    push(5); push(4); push(3);
    System.out.println(top());
    pop(); pop();
    System.out.println(top());
    push(10); push(12);
    System.out.println(top());
    pop();
    System.out.println(top());
  }
  static void push(int x) {
    if(is_full()) {
      System.out.println("스택이 가득찼습니다!");
      return;
    }
    dat[pos++] = x;
  }
  static void pop() {
    if(is_empty()) {
      System.out.println("스택이 비었습니다!");
      return;
    }
    pos--;
  }
  static int top() {
    if(is_empty()) {
      System.out.println("스택이 비었습니다!");
      System.exit(0);
    }
    return dat[pos-1];
  }
  static boolean is_full() {
    return pos == MX;
  }
  static boolean is_empty() {
    return pos == 0;
  }
}
