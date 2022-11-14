#include <stdio.h>

int is_full(int* len) {
  return *len > 10;
}

int is_empty(int* len) {
  return *len == 0;
}

void insert(int idx, int num, int arr[], int* len){
	if(!is_full(len) && idx <= *len) {
    for(int i = *len; i >= idx; i--) {
      arr[i] = arr[i-1]; 
    };
    arr[idx] = num;
    (*len)++;
  };
}

int erase(int idx, int arr[], int* len){
  if(!is_empty(len) && idx < *len) {
    int num = arr[idx];
    for(int i = idx; i < *len; i++) {
      arr[i] = arr[i+1];
    }
    (*len)--;
    return num;
  }
}

void printArr(int arr[], int len){
  for(int i = 0; i < len; i++) {
		printf("%d ", arr[i]);
	}
  printf("\n");
}

void insert_test(){
  int arr[10] = {10, 20, 30};
  int len = 3;
  insert(3, 40, arr, &len); // 10 20 30 40
  printArr(arr, len);
  insert(1, 50, arr, &len); // 10 50 20 30 40
  printArr(arr, len);
  insert(0, 15, arr, &len); // 15 10 50 20 30 40
  printArr(arr, len);
}

void erase_test(){
  int arr[10] = {10, 50, 40, 30, 70, 20};
  int len = 6;
  erase(4, arr, &len); // 10 50 40 30 20
  printArr(arr, len);
  erase(1, arr, &len); // 10 40 30 20
  printArr(arr, len);
  erase(3, arr, &len); // 10 40 30
  printArr(arr, len);
}

int main(void) {
  insert_test();
  erase_test();
}