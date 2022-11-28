 #include <bits/stdc++.h>
 using namespace std;

 int main() 
 {
    ios::sync_with_stdio(0);
    cin.tie(0);

    list<char> editor;
    list<char>::iterator cursor = editor.begin();

    string s;
    getline(cin, s);
    
    for(int i = 0; i < s.length(); i++) 
    {
        editor.push_back(s.at(i));
        cursor++;
    }
    cursor++;
    
    int m;
    cin >> m;
    while(m-- >= 0)
    {
        string command;
        getline(cin, command);
        switch(command[0])
        {
            case 'L': {
                if(cursor != editor.begin()) --cursor;
                break;
            }
            case 'D': {
                if(cursor != editor.end()) ++cursor;           
                break;
            }
            case 'B': {
                if(editor.size() > 1 && cursor != editor.begin()) 
                    cursor = editor.erase(--cursor);
            break;
            }
            case 'P': {
                cursor = editor.insert(cursor, command[2]);
                cursor++;
                break;
            }
        }
    }

    for(auto c : editor)
    {
        cout << c;
    }

    return 0;
 }
    

 