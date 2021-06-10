function binarySearch(arr,ele,start,end){
    let mid;
    if(end >= start){
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === ele){
            return `element found at ${mid+1}`;
        }else if(arr[mid] < ele){
            binarySearch(arr,ele,mid+1,end);
        }else{
            binarySearch(arr,ele,start,mid-1);
        }
    }
    return 'element not found';
}
let arr = [1,3,5,7,9,11];
console.log(binarySearch(arr,7,0,arr.length-1));
