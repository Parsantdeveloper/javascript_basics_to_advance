// Sort array of objects by multiple keys — salary descending, then age ascending.
// // Input: [{name:'A',age:25,salary:5000},{name:'B',age:20,salary:5000},{name:'C',age:30,salary:7000}]

let arr =[{name:'A',age:25,salary:5000},{name:'B',age:20,salary:5000},{name:'C',age:30,salary:7000}]
 arr =arr.sort((a,b)=>a.salary==b.salary?a.age-b.age: b.salary-a.salary)
 console.log(arr)