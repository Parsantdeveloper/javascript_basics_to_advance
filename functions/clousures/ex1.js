// function counter(){
//     let count = 0;
//     count ++ ;
//     return count ;
// }
// console.log(counter())
// console.log(counter())  this don't preserve state 

function counter(){
    let count =0;
     return function mycounter(){  // this function preserve state of the previous count value and returns the correct output every times . and donot lose data when rendered twice
      count++;
      return count;
    }
}
const reader=counter();
console.log(reader())
console.log(reader())
console.log(reader())