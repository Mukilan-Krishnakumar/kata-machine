export default function bubble_sort(arr: number[]): void {

  let n = arr.length;
  while (n > 1) {
    for (let index = 0; index < n; index++) {
        const element = arr[index];
        const right_element = arr[index + 1]
        if(right_element < element){
          let temp = arr[index + 1];
          arr[index + 1] = arr[index];
          arr[index] = temp;
        }
        
    }
    n -= 1;
  }
 }
