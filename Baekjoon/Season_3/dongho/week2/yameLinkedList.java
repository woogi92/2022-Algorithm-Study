import java.util.Arrays;

public class yameLinkedList {
  static final int MX = 100005;
  static int[] dat = new int[MX];
  static int[] pre = new int[MX];
  static int[] nxt = new int[MX];
  static int unused = 1;

  static void insert(int addr, int num) {
    //1. 새로운 원소를 생성
    dat[unused] = num;
    //2. 새 원소의 pre 값에 삽입할 위치의 주소를 대입
    pre[unused] = addr;
    //3. 새 원소의 nxt 값에 삽입할 위치의 nxt 값을 대입
    nxt[unused] = nxt[addr];
    //4. 삽입할 위치의 nxt 값과 삽입할 위치의 다음 원소의 pre 값을 새 원소로 변경
    nxt[addr] = unused;
    if(nxt[unused] != -1) pre[nxt[unused]] = unused;
    //5. unused 1 증가
    unused++;
  }

  static void erase(int addr) {
    //1. 이전 위치의 nxt를 삭제할 위치의 nxt로 변경
    nxt[pre[addr]] = nxt[addr];
    //2. 다음 위치의 pre를 삭제할 위치의 pre로 변경
    if(nxt[addr] != -1) pre[nxt[addr]] = pre[addr];
  }

  static void traverse() {
    int cur = nxt[0];
    while(cur != -1) {
      System.out.print(dat[cur] + " ");
      cur = nxt[cur];
    }
    System.out.println();
  }

  static void insert_test(){
    insert(0, 10); // 10(address=1)
    traverse();
    insert(0, 30); // 30(address=2) 10
    traverse();
    insert(2, 40); // 30 40(address=3) 10
    traverse();
    insert(1, 20); // 30 40 10 20(address=4)
    traverse();
    insert(4, 70); // 30 40 10 20 70(address=5)
    traverse();
  }

  static void erase_test(){
    erase(1); // 30 40 20 70
    traverse();
    erase(2); // 40 20 70
    traverse();
    erase(4); // 40 70
    traverse();
    erase(5); // 40
    traverse();
  }

  public static void main(String[] args) {
    Arrays.fill(pre, -1);
    Arrays.fill(nxt, -1);
    insert_test();
    System.out.println();
    erase_test();
  }
}
