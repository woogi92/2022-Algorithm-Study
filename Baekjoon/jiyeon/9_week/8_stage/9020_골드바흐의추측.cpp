#include <iostream>
#include <cmath>

using namespace std;

bool CheckPrimeNum(int num)
{
  int i = 2, root;
  root = sqrt(num);

  if(root == 1)
    return true;

  if(num%2)
  {
    for(; i<=root; i++)
    {
        if(!(num%i))
            return false;      
        if(i == root)
            return true;
    }
  }
  return false;
}

int main()
{
    int T, i;
    cin >> T;

    for(; i++<T;)
    {
        int n, half;

        cin >> n;
        half = n/2;

        for(int j = half; j >= 2; j--)
        {
            if(CheckPrimeNum(j) && CheckPrimeNum(n-j))
            {
                cout << j << " " << n-j << '\n';       
                break;
            } 
        }
    }  
}