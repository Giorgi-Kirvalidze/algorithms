// Iterative function to implement Binary Search
function binarySearch(arr , x) {
    let start = 0;
    let end = arr.length -1;

    while(start <= end) {
        let mid = Math.floor(start + end) / 2;
        
        if(arr[mid] === x) {
            return true; 
        }
        else if (arr[mid] < x){
            start = mid + 1;
        }
        else (
            end = mid - 1
        )
    }
    return false;
}

// recurive;
function recursiveBindarySearch (arr, x, start, end) {
    if (start > end) return false;
  
    let mid=Math.floor((start + end)/2);
  
    if (arr[mid]===x) return true;
         
    if(arr[mid] > x) {
        return recursiveFunction(arr, x, start, mid-1);
    }
    else {
        return recursiveFunction(arr, x, mid+1, end);
    }
}

console.log(binarySearch([1,2,3], 2));