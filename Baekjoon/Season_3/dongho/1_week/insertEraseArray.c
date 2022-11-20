#include <stdio.h>

int is_full(int* len) {
  printf("%d", *len);
  return *len > 10;
}

void insert(int idx, int num, int arr[], int* len){
	printf("%d", *len);
}

void erase(int idx, int arr[], int* len){
  
}

void printArr(int arr[], int len){
  for(int i = 0; i < len; i++) {
		printf("%d ", arr[i]);
	}
}

void insert_test(){
  int arr[10] = {10, 20, 30};
  int len = 3;
  int *p_len = &len;
  insert(3, 40, arr, &p_len); // 10 20 30 40
  //printArr(arr, len);
  /*
  insert(1, 50, arr, &len); // 10 50 20 30 40
  printArr(arr, len);
  insert(0, 15, arr, &len); // 15 10 50 20 30 40
  printArr(arr, len);
  */
}
/*
void erase_test(){
  int arr[10] = {10, 50, 40, 30, 70, 20};
  int len = 6;
  erase(4, arr, len); // 10 50 40 30 20
  printArr(arr, len);
  erase(1, arr, len); // 10 40 30 20
  printArr(arr, len);
  erase(3, arr, len); // 10 40 30
  printArr(arr, len);
}
*/
int main(void) {
  insert_test();
  //erase_test();
}