package sorting;

import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.StringTokenizer;

public class BOJ_24483 {
    public static int nodeCnt;
    public static int[] depth;
    public static boolean[] visited;
    public static ArrayList<ArrayList<Integer>> aList;
    public static int sum;
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer sToken;

        int node;
        int edge;
        int startNode;

        sToken = new StringTokenizer(reader.readLine());
        nodeCnt = 1;
        node = Integer.parseInt(sToken.nextToken());
        edge = Integer.parseInt(sToken.nextToken());
        startNode = Integer.parseInt(sToken.nextToken());
        visited = new boolean[node + 1];
        depth = new int[node + 1];
        aList = new ArrayList<ArrayList<Integer>>();
        sum = 0;

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

        dfs(startNode);

        writer.write(Integer.toString(sum));
        writer.flush();
    }

    private static void dfs(int startNode) {
        visited[startNode] = true;
        depth[startNode] = nodeCnt-1;
        sum += depth[startNode] * nodeCnt;
        for(Integer i : aList.get(startNode)){
            if(visited[i])
                continue;
            nodeCnt++;
            dfs(i);
        }
    }
}