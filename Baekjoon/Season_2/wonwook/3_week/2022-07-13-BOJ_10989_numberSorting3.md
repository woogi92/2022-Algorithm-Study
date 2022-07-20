BOJ_10989_수정렬하기3

```
import java.io.*;
import java.util.Arrays;

public class algorithmStudy {
    //  10989
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = "";

        //입력갯수
        str = br.readLine();
        int size = Integer.parseInt(str);

        //동적배열선언. 원래는 ArrayList를 사용했으나, 메모리초과로 인해 배열로 변경
        int[] arr = new int[size];
        for(int i=0; i<size; i++){
            str = br.readLine();
            arr[i] = Integer.parseInt(str);
        }
        //정렬
        Arrays.sort(arr);

        //출력
        for(int i : arr){
            bw.write(Integer.toString(i) + "\n");
        }

        //버퍼 닫기
        bw.flush();
    }
}
```

20220713.
이 문제는 메모리와 시간제한이 존재하는 문제이다. 시간을 줄이기 위해 Scanner 가 아닌 BufferedReader 를 사용하고, 출력도 BufferedWriter를 이용했다.
하지만 처음에는 배열이 아닌 ArrayList를 사용하여 문제를 풀었었는데, 어떻게 해도 메모리초과가 발생했다. 결국 배열 선언으로 바꿔 실행하니 통과됐다.
왜 ArrayList는 메모리초과가 발생하고 Array는 통과가 됐을까?
입력되는 숫자의 범위가 제한되어 있기에 배열을 통해 고정된 값을 세팅하는게 메모리를 더 아끼는 것 같다. ArrayList로 하게 될 경우, add되는 만큼 계속해서
메모리를 추가로 할당하여 공간을 잡게되기 때문에 메모리 초과가 발생하는 것 같다.



## 문제

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

## 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

## 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

## 예제 입력 1 복사

```
10
5
2
3
1
4
2
3
5
1
7
```

## 예제 출력 1 복사

```
1
1
2
2
3
3
4
5
5
7
```

## 출처

- 문제를 만든 사람: [baekjoon](https://www.acmicpc.net/user/baekjoon)
- 데이터를 추가한 사람: [cgiosy](https://www.acmicpc.net/user/cgiosy)
- 문제의 오타를 찾은 사람: [joonas](https://www.acmicpc.net/user/joonas)

## 비슷한 문제

- [2750번. 수 정렬하기](https://www.acmicpc.net/problem/2750)
- [2751번. 수 정렬하기 2](https://www.acmicpc.net/problem/2751)

## 알고리즘 분류

[보기](https://www.acmicpc.net/problem/10989#)

## 시간 제한

- Java 8: 3 초
- Java 8 (OpenJDK): 3 초
- Java 11: 3 초
- Kotlin (JVM): 3 초
- Java 15: 3 초

## 메모리 제한

- Java 8: 512 MB
- Java 8 (OpenJDK): 512 MB
- Java 11: 512 MB
- Kotlin (JVM): 512 MB
- Java 15: 512 MB