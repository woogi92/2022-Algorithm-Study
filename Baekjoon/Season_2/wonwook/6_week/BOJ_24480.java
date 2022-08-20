package sorting;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.StringTokenizer;

public class BOJ_24480 {
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
        int node;
        int edge;
        int startNode;
        node = Integer.parseInt(sToken.nextToken());
        edge = Integer.parseInt(sToken.nextToken());
        startNode = Integer.parseInt(sToken.nextToken());

        aList = new ArrayList<ArrayList<Integer>>();
        visited = new int[node + 1];
        cnt = 1;
        for(int i=0; i<=edge; i++){
            aList.add(new ArrayList<>());
            sToken = new StringTokenizer(reader.readLine());
            int x = Integer.parseInt(sToken.nextToken());
            int y = Integer.parseInt(sToken.nextToken());

            aList.get(x).get(y);
            aList.get(y).get(x);
        }
        for(int i=0; i<aList.size(); i++)
            aList.get(i).sort(Collections.reverseOrder());

        dfs(startNode);

        for(int i=1; i<=edge; i++)
            writer.write(Integer.toString(visited[i]));
        writer.flush();
    }
}
