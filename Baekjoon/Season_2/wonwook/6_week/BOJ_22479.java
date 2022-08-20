package sorting;

import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.StringTokenizer;

public class BOJ_22479 {
    public static int cnt;
    public static int[] visited;
    public static ArrayList<ArrayList<Integer>> aList;
    public static void dfs(int startNode){
        visited[startNode] = cnt++;
        for(int i=1; i<visited.length; i++){
            if(visited[i] > 0) continue;
            dfs(i);
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));

        StringTokenizer sToken = new StringTokenizer(reader.readLine());

        ArrayList<ArrayList<Integer>> aList = new ArrayList<ArrayList<Integer>>();
        int[] visited;

        int node;
        int edge;
        int startNode;

        node = Integer.parseInt(sToken.nextToken());
        edge = Integer.parseInt(sToken.nextToken());
        startNode = Integer.parseInt(sToken.nextToken());

        visited = new int[node + 1];
        cnt = 1;
        for(int i=0; i<=node; i++)
            aList.add(new ArrayList<>());

        for(int i=1; i<=edge; i++){
            sToken = new StringTokenizer(reader.readLine());
            int x = Integer.parseInt(sToken.nextToken());
            int y = Integer.parseInt(sToken.nextToken());
            aList.get(x).add(y);
            aList.get(y).add(x);
        }
        for(int i=1; i<aList.size(); i++)
            aList.get(i).sort(Comparator.naturalOrder());
        dfs(aList, startNode, visited);


        for(int i=1; i<=node; i++)
            writer.write(Integer.toString(visited[i]) + "\n");
        writer.flush();
    }
    public static void dfs(ArrayList<ArrayList<Integer>> list, int node, int[] visited){
        visited[node] = cnt++;
        for(Integer i : list.get(node)){
            if(visited[i] > 0) continue;
            dfs(list, i, visited);
        }
    }
}
