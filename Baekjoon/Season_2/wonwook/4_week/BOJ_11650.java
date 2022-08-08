package sorting;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

class Pair {
    private int x;
    private int y;

    public int getX() { return x; }
    public int getY() { return y; }

    public void setX(int x) { this.x = x; }
    public void setY(int y) { this.y = y; }
}
public class BOJ_11650 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int size = Integer.parseInt(reader.readLine());
        String[] str;
        Pair[] xyPos = new Pair[size];

        for(int i=0; i<size; i++){
            xyPos[i] = new Pair();
            str = reader.readLine().split(" ");
            xyPos[i].setX(Integer.parseInt(str[0]));
            xyPos[i].setY(Integer.parseInt(str[1]));
        }

//        Arrays.sort(xyPos, new Comparator<Pair>() {
//            @Override
//            public int compare(Pair o1, Pair o2) {
//                if (o1.getX() == o2.getX()) {
//                    return o1.getY() - o2.getY();
//                } else{
//                    return o1.getX() - o2.getX();
//                }
//            }
//        });

        Arrays.sort(xyPos, (o1, o2) -> {
            if (o1.getX() == o2.getX()) {
                return o1.getY() - o2.getY();
            } else{
                return o1.getX() - o2.getX();
            }
        });

        for(int i=0; i<size; i++){
            System.out.println(xyPos[i].getX() + " " + xyPos[i].getY());
        }
    }
}
