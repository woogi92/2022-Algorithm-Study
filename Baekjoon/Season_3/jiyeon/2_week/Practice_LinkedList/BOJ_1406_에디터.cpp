#include <bits/stdc++.h>
using namespace std;

const int MX = 600001;
char dat[MX];
int pre[MX], nxt[MX];
int unused = 1;
int cursor = 0;
int length = 0;

void insert(int addr, char c){
    dat[unused] = c;
    pre[unused] = addr;
    nxt[unused] = nxt[addr];
    if(nxt[addr] != -1) pre[nxt[addr]] = unused;
    nxt[addr] = unused;
    cursor = unused;
    unused++;
    length++;
}

void erase(int addr){
    nxt[pre[addr]] = nxt[addr];
    if(nxt[addr] != -1) pre[nxt[addr]] = pre[addr];
    length--;
    cursor = pre[addr];
}

void traverse(){
  int cur = nxt[0];
  while(cur != -1){
    cout << dat[cur];
    cur = nxt[cur];
  }
}

int main(void) 
{
    fill(pre, pre+MX, -1);
    fill(nxt, nxt+MX, -1);

    string s;
    getline(cin, s);
    
    for(int i = 0; i < s.length(); i++)
    {
        insert(cursor, s.at(i));
    }

    int m;
    cin >> m;
    while(m-- >= 0)
    {
        string command;
        getline(cin, command);
        switch(command[0])
        {
            case 'L': {
                if(pre[cursor] != -1) cursor = pre[cursor];
                break;
            }
            case 'D': {
                if(nxt[cursor] != -1) cursor = nxt[cursor];
                break;
            }
            case 'B': {
                if(pre[cursor] != -1) erase(cursor);
            break;
            }
            case 'P': {
                insert(cursor, command[2]);
                break;
            }
        }
    }

    traverse();

}