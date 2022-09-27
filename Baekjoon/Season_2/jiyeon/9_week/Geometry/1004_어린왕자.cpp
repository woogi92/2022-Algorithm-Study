#include <iostream>

using namespace std;

int T;
int x1, y1, x2, y2;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);
  cout.tie(0);

  cin >> T;

  while(T--) {
    int cnt = 0;
    cin >> x1 >> y1 >> x2 >> y2;
    
    int n;
    cin >> n;
    
    while(n--) {
      int cx, cy, r;
      cin >> cx >> cy >> r;

      int condition = r * r;
      int distance_start = (cx - x1) * (cx - x1) + (cy - y1) * (cy - y1);
      int distance_end = (cx - x2) * (cx - x2) + (cy - y2) * (cy - y2);

      if (distance_start < condition && distance_end > condition)
        cnt++;
      if(distance_end < condition && distance_start > condition)
        cnt++;
    }
    cout << cnt << "\n";
  }
}