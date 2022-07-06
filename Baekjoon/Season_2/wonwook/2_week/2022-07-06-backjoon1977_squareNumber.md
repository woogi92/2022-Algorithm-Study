## square number(완전제곱수)

풀이코드        

    import java.io.*;
    public class Main{
        public static void main(String[] args) throws IOException {
        	// 문자열 입력
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    		// 개행문자(\n) 를 기준으로 입력이 구분되기 때문에 reader를 두번 사용함
    		String str = reader.readLine();
            int m = Integer.parseInt(str);
            str = reader.readLine();
            int n = Integer.parseInt(str);
            
            int sum = 0, min=100000, cnt=0;
            for(int i=m; i<=n; i++){
                double tmp = Math.sqrt(i);
                int t = (int)tmp;
                if((double)t == tmp){
                    sum += i;
                    cnt++;
                }
                // 완전제곱수 최솟값
                if(cnt == 1) min = sum;
            }
            if(sum != 0) {
                System.out.println(sum);
                System.out.println(min);
            }
            else{
                System.out.println("-1");
            }
        }
    }

20220706.
입력값을 받는 방법을 scanner 가 아닌 bufferedReader를 사용했다. 문자열 입력에서 좋을거라 판단하여 사용했지만, 개행문자(\n) 를 기준으로 입력이 구분되기 때문에 차라리 scanner 가 나았을 것 같다.
풀이의 핵심은 pow() 를 사용하거나 sqrt()를 사용하여 범위 안의 완전 제곱수를 찾는 것!
나는 sqrt()를 사용하여 입력값 사이의  수들의 제곱근을 구하고, 해당 제곱근이 정수인지 아닌지 판단하기 위해 int형 변수 t를 만들어 받았다. 이후 비교는 다시 double 형으로 변환하여 소수점 이하의 수가 0인 애들이면(즉, 정수라면) 완전제곱수이므로 합하도록 구현했다.



## 문제

M과 N이 주어질 때 M이상 N이하의 자연수 중 완전제곱수인 것을 모두 골라 그 합을 구하고 그 중 최솟값을 찾는 프로그램을 작성하시오. 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 완전제곱수는 64, 81, 100 이렇게 총 3개가 있으므로 그 합은 245가 되고 이 중 최솟값은 64가 된다.

## 입력

첫째 줄에 M이, 둘째 줄에 N이 주어진다. M과 N은 10000이하의 자연수이며 M은 N보다 같거나 작다.

## 출력

M이상 N이하의 자연수 중 완전제곱수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다. 단, M이상 N이하의 자연수 중 완전제곱수가 없을 경우는 첫째 줄에 -1을 출력한다.

## 예제 입력 1 복사

```
60
100
```

## 예제 출력 1 복사

```
245
64
```

## 예제 입력 2 복사

```
75
80
```

## 예제 출력 2 복사

```
-1
```

