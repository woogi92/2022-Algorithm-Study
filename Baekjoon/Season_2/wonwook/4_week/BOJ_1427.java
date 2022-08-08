package sorting;

        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStreamReader;
        import java.util.ArrayList;
        import java.util.Comparator;

public class BOJ_1427 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String str = reader.readLine();

        ArrayList<Character> list = new ArrayList<>();
        for(int i=0; i<str.length(); i++){
            list.add(str.charAt(i));
        }
        list.sort(Comparator.reverseOrder());

        for(Character ch : list)
            System.out.print(ch);
    }
}
