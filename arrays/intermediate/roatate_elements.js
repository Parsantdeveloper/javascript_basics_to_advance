// rotate the elements of an array to the right by one position.
// The last element should move to the first position, and all other elements should shift one position to the right.
// nput 
//  arr = [1, 2, 3, 4, 5];
// output =[5, 1, 2, 3, 4]

let arr =[1,2,3,4,5];
let temp=arr[arr.length-1];
// output =[5, 1, 2, 3, 4]

 // [_,1,2,3,4];
 //[5,1,2,3,4];
for(let i =arr.length-1; i>0;i--){
    console.log("test")
    arr[i]=arr[i-1];
    
}
arr[0]=temp;
console.log(arr)