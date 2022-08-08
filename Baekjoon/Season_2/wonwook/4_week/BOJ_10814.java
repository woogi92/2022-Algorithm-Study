package sorting;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

 class PersonInfo implements Comparable<PersonInfo> {
    private int age;
    private String name;
    private int rank;

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public int getRank() {
        return rank;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public int compareTo(PersonInfo o) {
        if(this.age == o.age){
            return this.rank - o.rank;
        } else{
            return this.age - o.rank;
        }
    }
}
public class BOJ_10814 {
    public static void main(String[] args) throws IOException{
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(reader.readLine());
        String[] personInfo;
        PersonInfo[] pi = new PersonInfo[n];
        for(int i=0; i<n; i++){
            personInfo = reader.readLine().split(" ");

            pi[i] = new PersonInfo();
            pi[i].setAge(Integer.parseInt(personInfo[0]));
            pi[i].setName(personInfo[1]);
            pi[i].setRank(i+1);
        }

        Arrays.sort(pi, (o1, o2)->{
            if (o1.getAge() == o2.getAge()) {
                return o1.getRank() - o2.getRank();
            }else{
                return o1.getAge() - o2.getAge();
            }
        });
        for(PersonInfo personInfo1 : pi){
            System.out.println(personInfo1.getAge() + " " + personInfo1.getName());
        }
    }
}
