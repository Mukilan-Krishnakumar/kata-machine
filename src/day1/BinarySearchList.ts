export default function bs_list(haystack: number[], needle: number): boolean {
  
  // let start: number = 0;
  // let end: number = haystack.length - 1;
  // let mid: number = Math.floor((start + end)/2)
  // while(end > start){
  //   if(haystack[mid] == needle){
  //     return true
  //   } else if(haystack[mid] > needle){
  //     end = mid - 1;
  //   }
  //   else{
  //     start = mid + 1;
  //   }
  //  mid = Math.floor((start + end)/2);
  //
  // }
  // if(haystack[mid] == needle){
  //   return true;
  // }
  // return false
  
  let low: number = 0;
  let high: number = haystack.length;

  do {
    const mid: number = Math.floor(low + (high - low) / 2);
    const val: number = haystack[mid];
    if(val === needle){
      return true;
    } else if(val < needle){
      low = mid + 1
    } else{
      high = mid
    }
  } while (low < high);

  return false;
}
